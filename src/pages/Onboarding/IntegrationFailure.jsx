



import React from "react";
import { useNavigate } from "react-router-dom";
import SoftButton from "../../components/ui/SoftButton";
import { AlertTriangle } from "lucide-react";
import { motion } from "framer-motion";

export default function IntegrationFailure() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <motion.div
        className="w-full max-w-md bg-card rounded-3xl p-6 shadow-soft space-y-6 text-center"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {/* Animated Error Icon */}
        <motion.div
          className="w-14 h-14 mx-auto rounded-full bg-red-500 shadow-soft flex items-center justify-center"
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 120 }}
        >
          <AlertTriangle className="w-6 h-6 text-white" />
        </motion.div>

        <h2 className="text-2xl font-display font-bold text-card-foreground">
          Integration Not Detected
        </h2>

        <p className="text-sm text-card-foreground">
          We couldn’t detect the chatbot on your website yet. Please confirm you added the code or try again.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <SoftButton variant="secondary" onClick={() => navigate("/chatbot-integration")}>
            Go Back
          </SoftButton>
          <SoftButton variant="primary" onClick={() => navigate("/chatbot-integration")}>
            Retry Integration
          </SoftButton>
        </div>
      </motion.div>
    </div>
  );
}
