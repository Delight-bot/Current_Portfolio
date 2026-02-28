import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from rag import build_or_load_vectorstore, answer_from_cv

load_dotenv()

app = FastAPI()

SERVER_DIR = os.path.dirname(os.path.abspath(__file__))
CV_PATH = os.path.join(SERVER_DIR, "Data", "Delight_Nyanhete_Resume.pdf")
INDEX_DIR = os.path.join(SERVER_DIR, "vectorstore")

vectorstore = None

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://delight-bot.github.io",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class ChatRequest(BaseModel):
    message: str


class ChatResponse(BaseModel):
    reply: str
    sources: list


@app.get("/")
def root():
    return {"message": "Backend is running"}


@app.post("/ingest")
def ingest(rebuild: bool = False):
    global vectorstore
    vectorstore = build_or_load_vectorstore(INDEX_DIR, CV_PATH, rebuild=rebuild)
    return {"status": "indexed", "rebuild": rebuild}


@app.post("/chat", response_model=ChatResponse)
def chat(request: ChatRequest):
    global vectorstore
    if vectorstore is None:
        vectorstore = build_or_load_vectorstore(INDEX_DIR, CV_PATH, rebuild=False)

    reply, sources = answer_from_cv(vectorstore, request.message, k=4)
    return {"reply": reply, "sources": sources}
