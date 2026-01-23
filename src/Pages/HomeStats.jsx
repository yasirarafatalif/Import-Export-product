import React from 'react';

const HomeStats = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-white p-8 shadow-sm border-b">
    {[
      { label: "Products", value: "10K+" },
      { label: "Active Exporters", value: "2.5K" },
      { label: "Monthly Imports", value: "45K" },
      { label: "Countries", value: "120+" }
    ].map((stat, i) => (
      <div key={i} className="text-center">
        <h3 className="text-2xl font-bold text-slate-800">{stat.value}</h3>
        <p className="text-gray-500 text-sm">{stat.label}</p>
      </div>
    ))}
  </div>
);

export default HomeStats;


