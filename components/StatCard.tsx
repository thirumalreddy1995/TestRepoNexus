import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  trend: string;
  trendDirection: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, trend, trendDirection, icon }) => {
  const trendColor = trendDirection === 'up' ? 'text-green-600' : trendDirection === 'down' ? 'text-red-600' : 'text-gray-500';
  const trendBg = trendDirection === 'up' ? 'bg-green-50' : trendDirection === 'down' ? 'bg-red-50' : 'bg-gray-50';

  return (
    <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-gray-900">{value}</h3>
        </div>
        <div className="p-2 bg-nexus-50 text-nexus-600 rounded-lg">
          {icon}
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${trendBg} ${trendColor}`}>
          {trend}
        </span>
        <span className="text-xs text-gray-400">vs last month</span>
      </div>
    </div>
  );
};

export default StatCard;