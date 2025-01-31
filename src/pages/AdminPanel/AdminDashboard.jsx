// src/pages/AdminPanel/AdminDashboard.jsx
import React from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import StatsCard from "./StatsCard";
import RecentActivity from "./RecentActivity";
import { Users, MessageSquare, CheckCircle, Zap } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,250", icon: Users },
    { label: "Total Chatbots", value: "85", icon: MessageSquare },
    { label: "Messages Processed", value: "37.5K", icon: CheckCircle },
    { label: "Active Integrations", value: "73", icon: Zap },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar activePage="Dashboard" />

      {/* Main Content */}
      <main className="flex-1 p-6 bg-background">
        <motion.h1
          className="text-3xl font-bold text-card-foreground mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Admin Dashboard
        </motion.h1>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        {/* Recent Activity Table */}
        <RecentActivity />
      </main>
    </div>
  );
}
