import React from 'react';
import { MOCK_CLIENTS } from '../constants';
import { MoreHorizontal, Mail, Phone, Building } from 'lucide-react';

const Clients: React.FC = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
          <p className="text-gray-500 text-sm">Manage your relationships and consultancy agreements.</p>
        </div>
        <button className="px-4 py-2 bg-nexus-600 text-white rounded-lg hover:bg-nexus-700 transition-colors shadow-sm text-sm font-medium">
          Add New Client
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {MOCK_CLIENTS.map((client) => (
          <div key={client.id} className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center gap-4">
                <img src={client.avatarUrl} alt={client.name} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />
                <div>
                  <h3 className="font-semibold text-gray-900">{client.name}</h3>
                  <p className="text-xs text-gray-500">{client.industry}</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Building className="w-4 h-4 text-gray-400" />
                <span>{client.status}</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Mail className="w-4 h-4 text-gray-400" />
                <a href={`mailto:${client.email}`} className="hover:text-nexus-600">{client.email}</a>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-600">
                <Phone className="w-4 h-4 text-gray-400" />
                <span>{client.contactPerson}</span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500 mb-1">Total Revenue</p>
                <p className="font-bold text-gray-900">${client.revenue.toLocaleString()}</p>
              </div>
              <button className="text-sm text-nexus-600 font-medium hover:text-nexus-700">
                View Profile
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clients;