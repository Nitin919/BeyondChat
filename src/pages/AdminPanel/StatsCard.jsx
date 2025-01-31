// src/pages/AdminPanel/StatsCard.jsx
import React from "react";
import { motion } from "framer-motion";

export default function StatsCard({ label, value, icon: Icon }) {
  return (
    <motion.div
      className="bg-card p-6 rounded-2xl shadow-soft flex items-center space-x-4"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full shadow-md">
        <Icon className="w-6 h-6" />
      </div>
      <div>
        <p className="text-sm text-gray-600">{label}</p>
        <h3 className="text-xl font-bold text-card-foreground">{value}</h3>
      </div>
    </motion.div>
  );
}
