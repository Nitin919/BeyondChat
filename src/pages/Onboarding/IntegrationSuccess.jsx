


import React from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import Confetti from "react-confetti"; // Install via npm if needed

export default function IntegrationSuccess() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center  p-4 relative">
      {/* 🎉 Confetti Animation */}
      <Confetti recycle={false} numberOfPieces={300} />

      <motion.div
        className="w-full max-w-md bg-card rounded-3xl p-6 shadow-soft space-y-6 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Success Icon */}
        <div className="w-14 h-14 mx-auto rounded-full bg-green-500 shadow-soft flex items-center justify-center">
          <CheckCircle2 className="w-6 h-6 text-white" />
        </div>

        <h2 className="text-2xl font-display font-bold text-card-foreground">
          Integration Successful!
        </h2>

        <p className="text-sm text-card-foreground">
          Your chatbot is now live on your website.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col gap-3">
          <SoftButton variant="primary" onClick={() => navigate("/admin-panel")} whileHover={{ scale: 1.02 }}>
            Explore Admin Panel
          </SoftButton>
          <SoftButton variant="secondary" onClick={() => alert("Open chatbot (dummy)!")} whileHover={{ scale: 1.02 }}>
            Start Talking to Your Chatbot
          </SoftButton>
        </div>

        {/* Social Share Links */}
        <div className="flex items-center justify-center gap-4 mt-4">
          <a
            href="https://twitter.com/intent/tweet?text=I just integrated my chatbot with BeyondChats!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:underline hover:scale-105 transition"
          >
            Share on Twitter
          </a>
          <a
            href="https://www.linkedin.com/sharing/share-offsite/?url=https://your-live-app.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-700 hover:underline hover:scale-105 transition"
          >
            Share on LinkedIn
          </a>
        </div>
      </motion.div>
    </div>
  );
}
