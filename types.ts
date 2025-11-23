export interface Client {
  id: string;
  name: string;
  industry: string;
  status: 'Active' | 'Lead' | 'Churned';
  contactPerson: string;
  email: string;
  revenue: number;
  avatarUrl: string;
}

export interface Project {
  id: string;
  title: string;
  clientId: string;
  status: 'Planning' | 'In Progress' | 'Review' | 'Completed';
  dueDate: string;
  budget: number;
  progress: number;
}

export interface Invoice {
  id: string;
  clientId: string;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface Transaction {
  id: string;
  date: string;
  description: string;
  amount: number;
  type: 'Income' | 'Expense';
  category: string;
}

export interface DashboardMetrics {
  totalRevenue: number;
  activeProjects: number;
  pendingInvoices: number;
  monthlyGrowth: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}