import React, { useState } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FolderKanban, Receipt, Settings, Bot, Menu, Bell } from 'lucide-react';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Financials from './pages/Financials';
import AIChat from './components/AIChat';
import { MOCK_CLIENTS, MOCK_INVOICES, MOCK_PROJECTS, MOCK_TRANSACTIONS, APP_NAME } from './constants';

// Placeholder for Projects page to keep file count managed
const Projects = () => (
  <div className="p-10 text-center">
    <h2 className="text-2xl font-bold text-gray-800">Projects Module</h2>
    <p className="text-gray-500 mt-2">Kanban and Gantt views under construction.</p>
  </div>
);

const App: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isChatOpen, setChatOpen] = useState(false);

  // Determine context data based on current route for AI
  const location = window.location.hash.replace('#', '') || '/';
  
  const getContextData = () => {
    if (location.includes('financials')) return { transactions: MOCK_TRANSACTIONS, invoices: MOCK_INVOICES };
    if (location.includes('clients')) return { clients: MOCK_CLIENTS };
    return { 
        summary: "This is the main dashboard.",
        recentProjects: MOCK_PROJECTS,
        recentTransactions: MOCK_TRANSACTIONS.slice(0, 3)
    };
  };

  return (
    <HashRouter>
      <div className="flex h-screen bg-slate-50 text-slate-900 font-sans overflow-hidden">
        
        {/* Sidebar */}
        <aside 
            className={`${isSidebarOpen ? 'w-64' : 'w-20'} bg-nexus-900 text-white transition-all duration-300 flex flex-col shadow-xl z-20`}
        >
            <div className="h-16 flex items-center justify-center border-b border-nexus-800">
                {isSidebarOpen ? (
                    <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
                        <div className="w-8 h-8 bg-nexus-500 rounded-lg flex items-center justify-center">N</div>
                        {APP_NAME}
                    </div>
                ) : (
                    <div className="w-8 h-8 bg-nexus-500 rounded-lg flex items-center justify-center font-bold">N</div>
                )}
            </div>

            <nav className="flex-1 py-6 space-y-2 px-3">
                <NavItem to="/" icon={<LayoutDashboard size={20} />} label="Dashboard" isOpen={isSidebarOpen} />
                <NavItem to="/clients" icon={<Users size={20} />} label="Clients" isOpen={isSidebarOpen} />
                <NavItem to="/projects" icon={<FolderKanban size={20} />} label="Projects" isOpen={isSidebarOpen} />
                <NavItem to="/financials" icon={<Receipt size={20} />} label="Financials" isOpen={isSidebarOpen} />
            </nav>

            <div className="p-3 border-t border-nexus-800">
                <button 
                    onClick={() => setChatOpen(true)}
                    className={`w-full flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-nexus-600 to-nexus-500 text-white shadow-lg hover:shadow-nexus-500/25 hover:from-nexus-500 hover:to-nexus-400 transition-all ${!isSidebarOpen && 'justify-center'}`}
                >
                    <Bot size={20} />
                    {isSidebarOpen && <span className="font-medium">Ask Nexus AI</span>}
                </button>
            </div>
            
            <div className="p-3">
                 <NavItem to="/settings" icon={<Settings size={20} />} label="Settings" isOpen={isSidebarOpen} />
            </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden relative">
            {/* Header */}
            <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 shadow-sm z-10">
                <button onClick={() => setSidebarOpen(!isSidebarOpen)} className="text-gray-500 hover:text-gray-700">
                    <Menu size={20} />
                </button>
                <div className="flex items-center gap-6">
                    <div className="relative">
                        <Bell size={20} className="text-gray-500 hover:text-gray-700 cursor-pointer" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center gap-3 border-l border-gray-200 pl-6">
                        <div className="text-right hidden sm:block">
                            <p className="text-sm font-semibold text-gray-900">Jane Consultant</p>
                            <p className="text-xs text-gray-500">Senior Partner</p>
                        </div>
                        <img 
                            src="https://picsum.photos/seed/user/100/100" 
                            alt="Profile" 
                            className="w-9 h-9 rounded-full border border-gray-200"
                        />
                    </div>
                </div>
            </header>

            {/* Page Content */}
            <div className="flex-1 overflow-auto p-6 md:p-8 relative">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/clients" element={<Clients />} />
                    <Route path="/financials" element={<Financials />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/settings" element={<div className="p-10 text-center text-gray-500">Settings Page Placeholder</div>} />
                </Routes>
            </div>

            {/* AI Chat Overlay */}
            <AIChat 
                contextData={getContextData()} 
                isOpen={isChatOpen} 
                onClose={() => setChatOpen(false)} 
            />
        </main>
      </div>
    </HashRouter>
  );
};

// Helper Component for Nav Items
const NavItem = ({ to, icon, label, isOpen }: { to: string, icon: React.ReactNode, label: string, isOpen: boolean }) => (
    <NavLink 
        to={to}
        className={({ isActive }) => `
            flex items-center gap-3 p-3 rounded-xl transition-all duration-200
            ${isActive 
                ? 'bg-nexus-800 text-white shadow-inner' 
                : 'text-nexus-100 hover:bg-nexus-800/50 hover:text-white'
            }
            ${!isOpen && 'justify-center'}
        `}
    >
        {icon}
        {isOpen && <span className="font-medium text-sm">{label}</span>}
    </NavLink>
);

export default App;