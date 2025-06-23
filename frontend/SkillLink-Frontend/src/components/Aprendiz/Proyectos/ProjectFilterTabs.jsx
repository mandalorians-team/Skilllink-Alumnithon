import React, { useState } from "react";

export default function ProjectFilterTabs({ tabs }) {
  const [activeTab, setActiveTab] = useState(tabs[0]);

  return (
    <div className="bg-gray-800 p-1 rounded-lg flex space-x-2">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
            activeTab === tab
              ? "bg-blue-400 text-white"
              : "text-gray-400 hover:bg-gray-700 hover:text-white"
          }`}>
          {tab}
        </button>
      ))}
    </div>
  );
}
