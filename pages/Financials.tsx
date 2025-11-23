import React from 'react';
import { MOCK_TRANSACTIONS, MOCK_INVOICES } from '../constants';
import { ArrowUpRight, ArrowDownRight, Download } from 'lucide-react';

const Financials: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Financials</h1>
          <p className="text-gray-500 text-sm">Invoices, expenses, and account statements.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white text-gray-700 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors shadow-sm text-sm font-medium flex items-center gap-2">
            <Download className="w-4 h-4" /> Export CSV
          </button>
          <button className="px-4 py-2 bg-nexus-600 text-white rounded-lg hover:bg-nexus-700 transition-colors shadow-sm text-sm font-medium">
            New Invoice
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Invoice List */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Invoices</h3>
          <div className="space-y-4">
            {MOCK_INVOICES.map(inv => (
              <div key={inv.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                <div className="flex items-center gap-4">
                  <div className="bg-white p-2 rounded border border-gray-200">
                    <span className="text-xs font-bold text-gray-500">#{inv.id.split('_')[1]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Client {inv.clientId}</p>
                    <p className="text-xs text-gray-500">Due {inv.date}</p>
                  </div>
                </div>
                <div className="text-right">
                    <p className="text-sm font-bold text-gray-900">${inv.amount.toLocaleString()}</p>
                    <span className={`text-xs font-medium ${
                        inv.status === 'Paid' ? 'text-green-600' :
                        inv.status === 'Overdue' ? 'text-red-600' : 'text-orange-600'
                    }`}>
                        {inv.status}
                    </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Transactions</h3>
          <div className="overflow-hidden">
              <table className="w-full text-left">
                  <thead className="bg-gray-50 text-xs uppercase text-gray-500 font-medium">
                      <tr>
                          <th className="px-4 py-3 rounded-l-lg">Description</th>
                          <th className="px-4 py-3">Category</th>
                          <th className="px-4 py-3 text-right rounded-r-lg">Amount</th>
                      </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                      {MOCK_TRANSACTIONS.map(t => (
                          <tr key={t.id} className="hover:bg-slate-50 transition-colors">
                              <td className="px-4 py-3">
                                  <div className="flex items-center gap-2">
                                      <div className={`p-1 rounded-full ${t.type === 'Income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                        {t.type === 'Income' ? <ArrowUpRight className="w-3 h-3"/> : <ArrowDownRight className="w-3 h-3"/>}
                                      </div>
                                      <span className="text-sm text-gray-900 font-medium">{t.description}</span>
                                  </div>
                              </td>
                              <td className="px-4 py-3 text-sm text-gray-500">{t.category}</td>
                              <td className={`px-4 py-3 text-sm font-semibold text-right ${t.type === 'Income' ? 'text-green-600' : 'text-gray-900'}`}>
                                {t.type === 'Income' ? '+' : '-'}${t.amount.toLocaleString()}
                              </td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Financials;