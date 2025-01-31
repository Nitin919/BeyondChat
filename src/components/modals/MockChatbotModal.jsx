



import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, X, Send } from "lucide-react";

const MockChatbotModal = ({ onClose }) => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [messages, setMessages] = useState([
    { type: "bot", text: "Hello! Ask me anything about your company." },
    { type: "user", text: "What services do we offer?" },
    { type: "bot", text: "We offer web design, chatbots, and SEO services!" },
  ]);

  const inputRef = useRef(null);

  const handleSendMessage = () => {
    if (inputRef.current.value.trim() === "") return;

    const newMessage = inputRef.current.value;
    setMessages([...messages, { type: "user", text: newMessage }]);
    inputRef.current.value = "";

    setTimeout(() => {
      setMessages([...messages, { type: "user", text: newMessage }, { type: "bot", text: "Great question! Let me get back to you on that." }]);
    }, 1000);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative w-full max-w-3xl bg-card rounded-3xl p-6 shadow-soft overflow-hidden"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.9 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close Button */}
          <button
            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
            onClick={onClose}
            aria-label="Close chatbot modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Title */}
          <h3 className="text-xl font-bold text-card-foreground mb-4">Mock Client Website</h3>
          <p className="text-gray-700 mb-6">
            This is a dummy client site. Click the chatbot icon below to test.
          </p>

          {/* Chatbot Bubble */}
          {!isChatOpen && (
            <motion.button
              className="fixed bottom-8 right-8 bg-primary text-white p-4 rounded-full shadow-md flex items-center justify-center animate-bob"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setIsChatOpen(true);
                setTimeout(() => inputRef.current?.focus(), 300);
              }}
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          )}

          {/* Chat Window */}
          {isChatOpen && (
            <motion.div
              className="fixed bottom-8 right-8 w-80 bg-white rounded-2xl shadow-soft flex flex-col border border-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
            >
              {/* Chat Header */}
              <div className="bg-primary text-white p-3 rounded-t-2xl flex items-center justify-between">
                <span className="font-semibold">Dummy Chatbot</span>
                <button onClick={() => setIsChatOpen(false)}>
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Chat Messages */}
              <div className="flex-1 p-3 space-y-2 overflow-auto text-sm text-gray-800 bg-gray-50 max-h-64">
                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`px-3 py-2 rounded-lg w-fit max-w-[70%] ${
                      msg.type === "user" ? "bg-green-100 self-end" : "bg-primary/10"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex items-center p-2 bg-white rounded-b-2xl border-t">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 border-none outline-none bg-transparent px-2 text-sm focus:ring-2 focus:ring-primary"
                />
                <button
                  onClick={handleSendMessage}
                  className="text-primary font-semibold hover:underline ml-2"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default MockChatbotModal;
