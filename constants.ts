import { Client, Project, Invoice, Transaction } from './types';

export const MOCK_CLIENTS: Client[] = [
  {
    id: 'c1',
    name: 'Acme Corp',
    industry: 'Technology',
    status: 'Active',
    contactPerson: 'Alice Johnson',
    email: 'alice@acme.com',
    revenue: 150000,
    avatarUrl: 'https://picsum.photos/seed/acme/100/100',
  },
  {
    id: 'c2',
    name: 'Globex Inc',
    industry: 'Manufacturing',
    status: 'Active',
    contactPerson: 'Bob Smith',
    email: 'bob@globex.com',
    revenue: 85000,
    avatarUrl: 'https://picsum.photos/seed/globex/100/100',
  },
  {
    id: 'c3',
    name: 'Soylent Corp',
    industry: 'Food & Beverage',
    status: 'Lead',
    contactPerson: 'Carol Danvers',
    email: 'carol@soylent.com',
    revenue: 0,
    avatarUrl: 'https://picsum.photos/seed/soylent/100/100',
  },
  {
    id: 'c4',
    name: 'Initech',
    industry: 'Software',
    status: 'Churned',
    contactPerson: 'Peter Gibbons',
    email: 'peter@initech.com',
    revenue: 45000,
    avatarUrl: 'https://picsum.photos/seed/initech/100/100',
  },
];

export const MOCK_PROJECTS: Project[] = [
  {
    id: 'p1',
    title: 'Q3 Financial Audit',
    clientId: 'c1',
    status: 'In Progress',
    dueDate: '2023-11-15',
    budget: 25000,
    progress: 65,
  },
  {
    id: 'p2',
    title: 'Supply Chain Optimization',
    clientId: 'c2',
    status: 'Planning',
    dueDate: '2023-12-01',
    budget: 40000,
    progress: 10,
  },
  {
    id: 'p3',
    title: 'Market Entry Strategy',
    clientId: 'c1',
    status: 'Review',
    dueDate: '2023-10-30',
    budget: 15000,
    progress: 90,
  },
];

export const MOCK_INVOICES: Invoice[] = [
  { id: 'inv_001', clientId: 'c1', amount: 12500, date: '2023-10-01', status: 'Paid' },
  { id: 'inv_002', clientId: 'c2', amount: 8000, date: '2023-10-05', status: 'Pending' },
  { id: 'inv_003', clientId: 'c4', amount: 4500, date: '2023-09-15', status: 'Overdue' },
];

export const MOCK_TRANSACTIONS: Transaction[] = [
  { id: 't1', date: '2023-10-01', description: 'Consulting Fee - Acme', amount: 12500, type: 'Income', category: 'Services' },
  { id: 't2', date: '2023-10-02', description: 'Office Rent', amount: 2000, type: 'Expense', category: 'Operations' },
  { id: 't3', date: '2023-10-05', description: 'Software Licenses', amount: 450, type: 'Expense', category: 'Software' },
  { id: 't4', date: '2023-10-10', description: 'Travel - Client Meeting', amount: 1200, type: 'Expense', category: 'Travel' },
  { id: 't5', date: '2023-10-12', description: 'Consulting Fee - Globex', amount: 8000, type: 'Income', category: 'Services' },
];

export const APP_NAME = "Nexus";
export const GEMINI_MODEL = "gemini-2.5-flash";