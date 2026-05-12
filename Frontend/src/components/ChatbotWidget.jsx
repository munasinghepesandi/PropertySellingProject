import { useEffect, useMemo, useRef, useState } from "react";
import { Bot, MessageCircle, Minimize2, Send, X } from "lucide-react";
import "./ChatbotWidget.css";

function normalizeText(value) {
  return value.toLowerCase().replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
}

const quickReplies = [
  "How do I post an ad?",
  "How do I search properties?",
  "How do home loans work?",
  "How do I contact support?",
];

const cannedResponses = [
  {
    match: ["post ad", "post an ad", "advertise", "listing"],
    reply:
      "Use the Post Ad button in the top navigation, then complete the property details, images, and contact information before submitting.",
  },
  {
    match: ["search", "find property", "property search", "browse"],
    reply:
      "Use the search bar in the navbar or the main homepage search to filter by city, area, or property type.",
  },
  {
    match: ["home loan", "loan", "mortgage", "calculator"],
    reply:
      "The Home Loans section includes rates, a repayment calculator, and comparison tools to help you estimate monthly payments.",
  },
  {
    match: ["support", "help", "contact", "faq"],
    reply:
      "The Help page has a support form and the Footer links to support as well. QA users can use this widget for quick checks.",
  },
  {
    match: ["agent", "find agent"],
    reply:
      "Use Find Agent to browse the directory and connect with agents for sales, rentals, or commercial property help.",
  },
  {
    match: ["foreign", "foreigner", "overseas"],
    reply:
      "The foreign buyers guide covers local rules, taxes, and mortgage notes for overseas buyers.",
  },
];

function buildResponse(message) {
  const normalized = normalizeText(message);

  if (!normalized) {
    return "Please type a question or choose one of the quick prompts.";
  }

  for (const entry of cannedResponses) {
    if (entry.match.some((phrase) => normalized.includes(phrase))) {
      return entry.reply;
    }
  }

  if (normalized.includes("hello") || normalized.includes("hi")) {
    return "Hi. I can help QA the property flows, support links, and common user paths.";
  }

  return "I do not have a direct answer for that yet. Try asking about property search, posting ads, home loans, support, or agents.";
}

export function ChatbotWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "QA assistant ready. Ask me about site navigation, property search, support, or loans.",
    },
  ]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const title = useMemo(() => (isOpen ? "QA Chatbot" : "QA Help"), [isOpen]);

  const sendMessage = (text) => {
    const trimmed = text.trim();

    if (!trimmed) {
      return;
    }

    setMessages((current) => [
      ...current,
      { role: "user", text: trimmed },
      { role: "assistant", text: buildResponse(trimmed) },
    ]);
    setInputValue("");
    setIsOpen(true);
  };

  return (
    <div className={`qa-chatbot ${isOpen ? "is-open" : "is-closed"}`}>
      {!isOpen ? (
        <button type="button" className="qa-chatbot-launcher" onClick={() => setIsOpen(true)}>
          <span className="qa-chatbot-launcher-icon">
            <MessageCircle size={18} />
          </span>
          <span>
            <strong>Chat with us</strong>
            <small>Property assistant</small>
          </span>
        </button>
      ) : (
        <section className="qa-chatbot-panel" aria-label="QA chatbot">
          <header className="qa-chatbot-header">
            <div className="qa-chatbot-header-copy">
              <span className="qa-chatbot-header-badge">
                <Bot size={14} />
                QA only
              </span>
              <h2>{title}</h2>
              <p>Use this widget to check support copy, navigation, and common user tasks.</p>
            </div>

            <div className="qa-chatbot-actions">
              <button type="button" aria-label="Minimize chatbot" onClick={() => setIsOpen(false)}>
                <Minimize2 size={16} />
              </button>
            </div>
          </header>

          <div className="qa-chatbot-messages" ref={scrollRef}>
            {messages.map((message, index) => (
              <div key={`${message.role}-${index}`} className={`qa-chatbot-message ${message.role}`}>
                {message.text}
              </div>
            ))}
          </div>

          <div className="qa-chatbot-quick-replies">
            {quickReplies.map((reply) => (
              <button key={reply} type="button" onClick={() => sendMessage(reply)}>
                {reply}
              </button>
            ))}
          </div>

          <form
            className="qa-chatbot-input-row"
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(inputValue);
            }}
          >
            <input
              type="text"
              value={inputValue}
              onChange={(event) => setInputValue(event.target.value)}
              placeholder="Ask a QA question..."
              aria-label="QA chatbot message"
            />
            <button type="submit" aria-label="Send message">
              <Send size={16} />
            </button>
          </form>

          <button
            type="button"
            className="qa-chatbot-floating-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close chatbot"
          >
            <X size={14} />
          </button>
        </section>
      )}
    </div>
  );
}
