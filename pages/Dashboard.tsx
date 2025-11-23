import React from 'react';
import { DollarSign, Users, Briefcase, TrendingUp } from 'lucide-react';
import StatCard from '../components/StatCard';
import { MOCK_PROJECTS, MOCK_CLIENTS, MOCK_TRANSACTIONS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 9800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-500 text-sm">Welcome back. Here's what's happening today.</p>
        </div>
        <button className="px-4 py-2 bg-nexus-600 text-white rounded-lg hover:bg-nexus-700 transition-colors shadow-sm text-sm font-medium">
          Generate Report
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Revenue" 
          value="$124,500" 
          trend="+12.5%" 
          trendDirection="up" 
          icon={<DollarSign className="w-5 h-5" />} 
        />
        <StatCard 
          title="Active Clients" 
          value="14" 
          trend="+2" 
          trendDirection="up" 
          icon={<Users className="w-5 h-5" />} 
        />
        <StatCard 
          title="Open Projects" 
          value="8" 
          trend="Neutral" 
          trendDirection="neutral" 
          icon={<Briefcase className="w-5 h-5" />} 
        />
        <StatCard 
          title="Profit Margin" 
          value="68%" 
          trend="-2.1%" 
          trendDirection="down" 
          icon={<TrendingUp className="w-5 h-5" />} 
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Financial Chart */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Financial Performance</h3>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={data}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                <Tooltip 
                    contentStyle={{borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                    cursor={{fill: '#f8fafc'}}
                />
                <Bar dataKey="income" fill="#0ea5e9" radius={[4, 4, 0, 0]} maxBarSize={40} />
                <Bar dataKey="expense" fill="#cbd5e1" radius={[4, 4, 0, 0]} maxBarSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Recent Activity Feed */}
        <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Recent Activity</h3>
          <div className="flex-1 overflow-y-auto pr-2 space-y-6">
            {MOCK_TRANSACTIONS.slice(0, 5).map((t, idx) => (
              <div key={t.id} className="flex gap-4">
                <div className={`w-2 h-2 rounded-full mt-2 shrink-0 ${t.type === 'Income' ? 'bg-green-500' : 'bg-red-400'}`} />
                <div>
                  <p className="text-sm font-medium text-gray-900">{t.description}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{t.date} • {t.category}</p>
                </div>
                <div className="ml-auto">
                  <span className={`text-sm font-semibold ${t.type === 'Income' ? 'text-green-600' : 'text-gray-900'}`}>
                    {t.type === 'Income' ? '+' : '-'}${t.amount.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-6 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors">
            View All Transactions
          </button>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Active Projects</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                <th className="pb-3 pl-4 font-medium">Project Name</th>
                <th className="pb-3 font-medium">Client</th>
                <th className="pb-3 font-medium">Status</th>
                <th className="pb-3 font-medium">Progress</th>
                <th className="pb-3 font-medium">Due Date</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {MOCK_PROJECTS.map((p) => {
                const client = MOCK_CLIENTS.find(c => c.id === p.clientId);
                return (
                  <tr key={p.id} className="group hover:bg-slate-50 transition-colors">
                    <td className="py-4 pl-4 text-sm font-medium text-gray-900">{p.title}</td>
                    <td className="py-4 text-sm text-gray-600 flex items-center gap-2">
                       <img src={client?.avatarUrl} alt="" className="w-6 h-6 rounded-full" />
                       {client?.name}
                    </td>
                    <td className="py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        p.status === 'In Progress' ? 'bg-blue-50 text-blue-700' :
                        p.status === 'Completed' ? 'bg-green-50 text-green-700' :
                        p.status === 'Planning' ? 'bg-purple-50 text-purple-700' :
                        'bg-orange-50 text-orange-700'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                    <td className="py-4 w-48">
                      <div className="flex items-center gap-3">
                        <div className="w-full bg-gray-100 rounded-full h-2">
                          <div 
                            className="bg-nexus-500 h-2 rounded-full transition-all duration-1000" 
                            style={{width: `${p.progress}%`}}
                          />
                        </div>
                        <span className="text-xs text-gray-500 w-8">{p.progress}%</span>
                      </div>
                    </td>
                    <td className="py-4 text-sm text-gray-500">{p.dueDate}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;