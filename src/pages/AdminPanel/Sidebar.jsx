import React from "react";
import { useNavigate } from "react-router-dom";
import { Home, Users, MessageSquare, Settings, X } from "lucide-react";

export default function Sidebar({ activePage, isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const menuItems = [
    { label: "Dashboard", icon: Home, route: "/admin-panel" },
    { label: "Users", icon: Users, route: "/admin-panel/users" },
    { label: "Chatbots", icon: MessageSquare, route: "/admin-panel/chatbots" },
    { label: "Settings", icon: Settings, route: "/admin-panel/settings" },
  ];

  return (
    <>
      {/* Sidebar */}
      <aside
        className={`fixed sm:relative top-0 left-0 w-64 bg-card shadow-lg min-h-screen p-6 z-50 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } sm:translate-x-0`}
      >
        {/* Close Button for Mobile */}
        <button
          className="sm:hidden absolute top-4 right-4 text-gray-600 hover:text-gray-800"
          onClick={() => setIsOpen(false)}
          aria-label="Close Sidebar"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Sidebar Header */}
        <h2 className="text-2xl font-bold text-card-foreground mb-6">Admin Panel</h2>

        {/* Menu Items */}
        <nav className="space-y-4">
          {menuItems.map(({ label, icon: Icon, route }) => (
            <button
              key={label}
              onClick={() => {
                navigate(route);
                setIsOpen(false); // Close sidebar on mobile
              }}
              className={`w-full flex items-center space-x-3 p-3 rounded-xl transition-all ${
                activePage === label
                  ? "bg-primary text-white shadow-md"
                  : "hover:bg-secondary text-card-foreground"
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm font-medium">{label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 sm:hidden"
          onClick={() => setIsOpen(false)}
          aria-label="Close Sidebar Overlay"
        ></div>
      )}
    </>
  );
}
