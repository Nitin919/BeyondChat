



import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { MessageCircle, Code2, Clipboard } from "lucide-react";
import MockChatbotModal from "../../components/modals/MockChatbotModal";
import FeedbackModal from "../../components/modals/FeedbackModal";
import { AnimatePresence, motion } from "framer-motion";
import toast from "react-hot-toast";

export default function ChatbotIntegration() {
  const navigate = useNavigate();
  const [showChatbotTest, setShowChatbotTest] = useState(false);
  const [showIntegrationSnippet, setShowIntegrationSnippet] = useState(false);
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [isChecking, setIsChecking] = useState(false);

  const integrationSnippet = `
<script src="https://dummy-beyondchats-sdk.js"></script>
<script>
  BeyondChats.init({
    key: "YOUR-CLIENT-KEY"
  });
</script>`;

  const handleTestChatbot = () => setShowChatbotTest(true);
  const handleShowIntegration = () => setShowIntegrationSnippet(true);
  const handleHideIntegration = () => setShowIntegrationSnippet(false);

  const handleTestIntegration = () => {
    setIsChecking(true);
    setTimeout(() => {
      setIsChecking(false);
      const success = Math.random() > 0.5;
      navigate(success ? "/integration-success" : "/integration-failure");
    }, 2000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(integrationSnippet);
    toast.success("Copied to clipboard!");
  };

  return (
    <div className="min-h-screen flex flex-col bg-background p-4 relative">
      {/* Feedback Top Bar */}
      <div className="bg-secondary text-card-foreground px-4 py-2 rounded-md mb-4 shadow-soft flex items-center justify-between">
        <span className="text-sm font-semibold">Chatbot not working as intended? Share feedback</span>
        <button onClick={() => setShowFeedbackModal(true)} className="underline text-primary text-sm font-medium">
          Feedback
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center">
        <AnimatePresence>
          {isChecking && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="bg-white p-6 rounded-xl shadow-soft flex flex-col items-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.8 }}
              >
                <span className="text-gray-700 mb-3">Checking Integration...</span>
                <div className="w-8 h-8 border-4 border-t-transparent border-primary rounded-full animate-spin"></div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="w-full max-w-2xl bg-card rounded-3xl p-6 shadow-soft space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-display font-bold text-card-foreground">Chatbot Integration & Testing</h2>
            <div className="w-14 h-14 rounded-full bg-primary shadow-soft flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-white" />
            </div>
          </div>

          <p className="text-sm text-card-foreground">This step lets you test your chatbot and integrate it on your website.</p>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <SoftButton variant="primary" className="flex-1" onClick={handleTestChatbot} whileHover={{ scale: 1.02 }}>
              Test Chatbot
            </SoftButton>

            <SoftButton variant="secondary" className="flex-1" onClick={handleShowIntegration} whileHover={{ scale: 1.02 }}>
              Integrate on Your Website
            </SoftButton>

            <SoftButton variant="primary" className="flex-1" onClick={handleTestIntegration} whileHover={{ scale: 1.02 }}>
              Test Integration
            </SoftButton>
          </div>
        </div>
      </div>

      {/* Mock Chatbot Modal */}
      {showChatbotTest && <MockChatbotModal onClose={() => setShowChatbotTest(false)} />}

      {/* Integration Snippet Modal */}
      <AnimatePresence>
        {showIntegrationSnippet && (
          <motion.div
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative w-full max-w-md bg-card rounded-3xl p-6 shadow-soft"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-600" onClick={handleHideIntegration}>
                &times;
              </button>

              <div className="flex items-center space-x-2 mb-4">
                <Code2 className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-display font-bold text-card-foreground">Integration Instructions</h3>
              </div>

              <p className="text-sm text-card-foreground mb-4">
                Copy & paste this code snippet into your <code>&lt;head&gt;</code>:
              </p>

              <div className="relative bg-gray-800 text-white p-4 rounded-md text-xs mb-4 overflow-auto">
                <pre>{integrationSnippet}</pre>
                <button
                  className="absolute top-2 right-2 text-white hover:text-gray-400"
                  onClick={handleCopyCode}
                >
                  <Clipboard className="w-5 h-5" />
                </button>
              </div>

              <div className="flex gap-2">
                <SoftButton variant="secondary" onClick={() => (window.location.href = "mailto:developer@example.com")}>
                  Mail Instructions
                </SoftButton>
                <SoftButton variant="primary" onClick={handleHideIntegration}>
                  Done
                </SoftButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Feedback Modal */}
      {showFeedbackModal && <FeedbackModal onClose={() => setShowFeedbackModal(false)} />}
    </div>
  );
}
