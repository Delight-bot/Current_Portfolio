import { useEffect, useRef, useState } from "react";

const API_BASE = process.env.REACT_APP_API_BASE_URL || "http://localhost:8000";

const LS_KEY = "delight_chat_widget_open";   // remember open/closed
const LS_HIDE_KEY = "delight_chat_widget_hide"; // remember if user clicked X

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hi — want a quick summary of my work or fast answers? Ask me anything." },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const bottomRef = useRef(null);

  // Restore state
  useEffect(() => {
    const savedOpen = localStorage.getItem(LS_KEY);
    const savedHidden = localStorage.getItem(LS_HIDE_KEY);
    if (savedOpen === "true") setIsOpen(true);
    if (savedHidden === "true") setIsHidden(true);
  }, []);

  // Persist open/closed (only if not hidden)
  useEffect(() => {
    if (!isHidden) localStorage.setItem(LS_KEY, String(isOpen));
  }, [isOpen, isHidden]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading, isOpen]);

  const openWidget = () => {
    setIsHidden(false);
    localStorage.setItem(LS_HIDE_KEY, "false");
    setIsOpen(true);
  };

  const closeWidget = () => {
    setIsOpen(false);
  };

  // X = hide floating widget, but nav can still reopen it
  const hideWidget = () => {
    setIsOpen(false);
    setIsHidden(true);
    localStorage.setItem(LS_HIDE_KEY, "true");
    localStorage.setItem(LS_KEY, "false");
  };

  const sendMessage = async () => {
    setError("");
    const trimmed = input.trim();
    if (!trimmed || loading) return;

    setMessages((prev) => [...prev, { role: "user", content: trimmed }]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply || "No reply received." },
      ]);
    } catch (e) {
      setError("Could not reach the chatbot server. Make sure FastAPI is running.");
    } finally {
      setLoading(false);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  // If hidden, show nothing floating
  if (isHidden) return null;

  return (
    <>
      {/* Floating “teaser” button when closed */}
      {!isOpen && (
        <button onClick={openWidget} style={styles.fab} aria-label="Open chat">
          <div style={styles.fabTitle}>Quick summary</div>
          <div style={styles.fabSub}>Fast answers — click me</div>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div style={styles.window} role="dialog" aria-label="Chat widget">
          <div style={styles.header}>
            <div>
              <div style={styles.headerTitle}>Chat with Delight</div>
              <div style={styles.headerSub}>Ask about projects, skills, experience</div>
            </div>

            <div style={styles.headerBtns}>
              <button onClick={closeWidget} style={styles.iconBtn} title="Minimize">—</button>
              <button onClick={hideWidget} style={styles.iconBtn} title="Close">✕</button>
            </div>
          </div>

          <div style={styles.chatBox}>
            {messages.map((m, idx) => (
              <div
                key={idx}
                style={{
                  ...styles.bubble,
                  ...(m.role === "user" ? styles.userBubble : styles.assistantBubble),
                }}
              >
                {m.content}
              </div>
            ))}

            {loading && (
              <div style={{ ...styles.bubble, ...styles.assistantBubble }}>
                Thinking…
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {error && <div style={styles.error}>{error}</div>}

          <div style={styles.inputRow}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type a question…"
              style={styles.textarea}
              rows={2}
            />
            <button onClick={sendMessage} style={styles.sendBtn} disabled={loading}>
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

const styles = {
  fab: {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    width: "220px",
    textAlign: "left",
    borderRadius: "16px",
    border: "1px solid #ffffff",
    background: "rgba(0,0,0,0.75)",
    color: "#ffffff",
    padding: "12px 14px",
    cursor: "pointer",
    zIndex: 9999,
    backdropFilter: "blur(10px)",
  },
  fabTitle: { fontWeight: 700, fontSize: "14px", marginBottom: "2px" },
  fabSub: { opacity: 0.85, fontSize: "12px" },

  window: {
    position: "fixed",
    right: "18px",
    bottom: "18px",
    width: "360px",
    height: "520px",
    borderRadius: "16px",
    border: "1px solid #ffffff",
    background: "rgba(0, 0, 0, 0.45)",
    color: "#ffffff",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
    backdropFilter: "blur(12px)",
  },

  header: {
    padding: "12px 12px",
    borderBottom: "1px solid #ffffff",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
  },
  headerTitle: { fontWeight: 800, fontSize: "14px" },
  headerSub: { opacity: 0.8, fontSize: "12px", marginTop: "2px" },
  headerBtns: { display: "flex", gap: "6px" },
  iconBtn: {
    borderRadius: "10px",
    border: "1px solid #ffffff",
    background: "transparent",
    color: "#ffffff",
    cursor: "pointer",
    width: "34px",
    height: "30px",
  },

  chatBox: {
    flex: 1,
    padding: "12px",
    overflowY: "auto",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  bubble: {
    maxWidth: "86%",
    padding: "10px 12px",
    borderRadius: "12px",
    whiteSpace: "pre-wrap",
    lineHeight: 1.4,
    fontSize: "13px",
  },
  userBubble: {
    alignSelf: "flex-end",
    background: "rgba(255,255,255,0.12)",
  },
  assistantBubble: {
    alignSelf: "flex-start",
    background: "rgba(255,255,255,0.07)",
  },

  error: { padding: "0 12px 8px", color: "tomato", fontSize: "12px" },

  inputRow: {
    padding: "12px",
    borderTop: "1px solid rgba(255,255,255,0.12)",
    display: "flex",
    gap: "10px",
    alignItems: "stretch",
  },
  textarea: {
    flex: 1,
    borderRadius: "12px",
    padding: "10px 12px",
    border: "1px solid #ffffff",
    background: "transparent",
    color: "#ffffff",
    caretColor: "#ffffff",
    resize: "none",
    outline: "none",
    fontSize: "13px",
  },
  sendBtn: {
    width: "80px",
    borderRadius: "12px",
    border: "none",
    cursor: "pointer",
    padding: "10px 12px",
    background: "rgba(255,255,255,0.12)",
    color: "#ffffff",
  },
};