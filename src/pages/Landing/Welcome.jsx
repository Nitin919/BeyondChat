import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import  SoftButton  from "../../components/ui/SoftButton";

export default function Welcome() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <motion.img
        src="/assets/welcome-illustration.svg" // your image
        alt="Welcome Illustration"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4 }}
        className="w-60 mb-6"
      />
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-3xl font-display font-bold mb-4 text-card-foreground"
      >
        Welcome to BeyondChats
      </motion.h1>
      <p className="text-sm text-center text-card-foreground max-w-md mb-6">
        A short description or tagline about your chatbot platform.
      </p>
      <SoftButton
        variant="primary"
        onClick={() => navigate("/")} // your login or register route
      >
        Get Started
      </SoftButton>
    </div>
  );
}
