import os
from typing import List, Tuple, Dict, Any
from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import FAISS
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_core.documents import Document
from langchain_core.prompts import ChatPromptTemplate


def build_or_load_vectorstore(
    index_dir: str,
    pdf_path: str,
    rebuild: bool = False,
) -> FAISS:
    embeddings = OpenAIEmbeddings()

    if (not rebuild) and os.path.exists(index_dir):
        return FAISS.load_local(index_dir, embeddings, allow_dangerous_deserialization=True)

    if not os.path.exists(pdf_path):
        raise FileNotFoundError(f"PDF not found at: {pdf_path}")

    docs = PyPDFLoader(pdf_path).load()

    splitter = RecursiveCharacterTextSplitter(
        chunk_size=900,
        chunk_overlap=150,
        separators=["\n\n", "\n", " ", ""],
    )
    chunks = splitter.split_documents(docs)

    vs = FAISS.from_documents(chunks, embeddings)
    os.makedirs(index_dir, exist_ok=True)
    vs.save_local(index_dir)
    return vs


def answer_from_cv(
    vectorstore: FAISS,
    question: str,
    k: int = 4,
) -> Tuple[str, List[Dict[str, Any]]]:
    retriever = vectorstore.as_retriever(search_kwargs={"k": k})
    docs: List[Document] = retriever.invoke(question)

    context_blocks = []
    sources = []
    for d in docs:
        src = d.metadata.get("source", "resume.pdf")
        page = d.metadata.get("page", None)
        sources.append({"source": os.path.basename(src), "page": (page + 1) if isinstance(page, int) else None})

        header = f"Source: {os.path.basename(src)}"
        if isinstance(page, int):
            header += f" (page {page + 1})"
        context_blocks.append(f"{header}\n{d.page_content}")

    context = "\n\n---\n\n".join(context_blocks)

    system_text = (
        "You are Delight's portfolio chatbot. Answer using ONLY the provided context from the CV. "
        "If the CV does not contain the answer, say: 'Oops, that is not included in my resume.' "
        "Then inform them how to contact me or where more information could be found e.g. LinkedIn or GitHub which can be found on the website. "
        "Inform that I am very responsive on email, LinkedIn and phone."
        "If they ask by saying eg what is Delight's , you respond using My"
        "Its not everytime you recommend something. Only if you dont find the info"
        "If someone type hello, or hi or greets, respond and say Hi. I am Delight's bot. Ask me what you'd want to know"
    )

    prompt = ChatPromptTemplate.from_messages([
        ("system", system_text),
        ("user", "Context:\n{context}\n\nQuestion:\n{question}"),
    ])

    llm = ChatOpenAI(model="gpt-4o-mini", temperature=0.2)
    resp = llm.invoke(prompt.format_messages(context=context, question=question))

    return resp.content, sources
