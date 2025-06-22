import React from "react";

const StatCard = ({ label, value }) => (
  <div className="bg-white/20 p-4 rounded-lg text-center">
    <p className="text-sm text-gray-800">{label}</p>
    <p className="text-3xl font-bold text-gray-900">{value}</p>
    <div className="w-full bg-gray-400/50 rounded-full h-1 mt-2">
      <div
        className="bg-blue-500 h-1 rounded-full"
        style={{ width: `${Math.random() * 100}%` }}></div>
    </div>
  </div>
);

export default function StatsSection({ stats }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      {stats.map((stat) => (
        <StatCard key={stat.label} {...stat} />
      ))}
    </div>
  );
}
