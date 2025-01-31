// src/pages/AdminPanel/Sidebar.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Users, MessageSquare, Settings } from "lucide-react";

export default function Sidebar({ activePage }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: Home, route: "/admin-panel" },
    { label: "Users", icon: Users, route: "/admin-panel/users" },
    { label: "Chatbots", icon: MessageSquare, route: "/admin-panel/chatbots" },
    { label: "Settings", icon: Settings, route: "/admin-panel/settings" },
  ];

  return (
    <aside className="w-64 bg-card shadow-soft min-h-screen p-6">
      <h2 className="text-2xl font-bold text-card-foreground mb-6">Admin Panel</h2>

      <nav className="space-y-4">
        {menuItems.map(({ label, icon: Icon, route }) => (
          <button
            key={label}
            onClick={() => navigate(route)}
            className={`w-full flex items-center space-x-3 p-3 rounded-xl transition ${
              activePage === label ? "bg-primary text-white" : "hover:bg-secondary text-card-foreground"
            }`}
          >
            <Icon className="w-5 h-5" />
            <span className="text-sm font-medium">{label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}
