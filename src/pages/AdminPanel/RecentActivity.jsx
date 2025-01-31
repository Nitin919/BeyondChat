// src/pages/AdminPanel/RecentActivity.jsx
import React from "react";

const activityData = [
  { id: 1, user: "John Doe", action: "Created a chatbot", timestamp: "2 hours ago" },
  { id: 2, user: "Alice Smith", action: "Updated integration settings", timestamp: "5 hours ago" },
  { id: 3, user: "Mark White", action: "Tested chatbot response", timestamp: "1 day ago" },
];

export default function RecentActivity() {
  return (
    <div className="mt-8 bg-card p-6 rounded-2xl shadow-soft">
      <h2 className="text-xl font-bold text-card-foreground mb-4">Recent Activity</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left text-card-foreground">
          <thead>
            <tr className="border-b border-secondary">
              <th className="p-3">User</th>
              <th className="p-3">Action</th>
              <th className="p-3">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map(({ id, user, action, timestamp }) => (
              <tr key={id} className="border-b border-secondary">
                <td className="p-3">{user}</td>
                <td className="p-3">{action}</td>
                <td className="p-3 text-gray-600">{timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
