import React, { useState } from "react";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import StatsCard from "./StatsCard";
import RecentActivity from "./RecentActivity";
import { Users, MessageSquare, CheckCircle, Zap, Menu } from "lucide-react";

export default function AdminDashboard() {
  const stats = [
    { label: "Total Users", value: "1,250", icon: Users },
    { label: "Total Chatbots", value: "85", icon: MessageSquare },
    { label: "Messages Processed", value: "37.5K", icon: CheckCircle },
    { label: "Active Integrations", value: "73", icon: Zap },
  ];

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar Toggle Button */}
      <button
        className="sm:hidden fixed top-4 left-4 bg-primary text-white p-3 rounded-full shadow-lg z-50"
        onClick={() => setIsSidebarOpen(true)}
        aria-label="Open Sidebar"
      >
        <Menu className="w-6 h-6" />
      </button>

      {/* Sidebar */}
      <Sidebar activePage="Dashboard" isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <main className="flex-1 p-4 sm:p-6">
        <motion.h1
          className="text-2xl sm:text-3xl font-bold text-card-foreground mb-6"
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
