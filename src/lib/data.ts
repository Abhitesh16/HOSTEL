export interface Notice {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'General' | 'Urgent' | 'Event';
}

export const NOTICES: Notice[] = [];

import { useState, useEffect } from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  status: 'Active' | 'Pending' | 'Suspended';
}

const loadUsers = (): User[] => {
  const saved = localStorage.getItem('university_users');
  if (saved) return JSON.parse(saved);
  return [
    { id: 'USR001', name: 'Alka Sharma', email: 'alka@example.com', status: 'Active' },
    { id: 'USR002', name: 'Rahul Bose', email: 'rahul@example.com', status: 'Active' },
  ];
};

let users: User[] = loadUsers();

let listeners: (() => void)[] = [];

function saveUsers() {
  localStorage.setItem('university_users', JSON.stringify(users));
}

function notifyListeners() {
  saveUsers();
  for (const listener of listeners) {
    listener();
  }
}

export function useUsers() {
  const [currentUsers, setCurrentUsers] = useState(users);

  useEffect(() => {
    const listener = () => setCurrentUsers([...users]);
    listeners.push(listener);
    return () => {
      listeners = listeners.filter(l => l !== listener);
    };
  }, []);

  const addUser = (name: string, email: string) => {
    // Check if user with email already exists
    if (users.find(u => u.email === email)) {
      return;
    }
    
    const newUser: User = {
      id: `USR${String(users.length + 1).padStart(3, '0')}`,
      name,
      email,
      status: 'Pending',
    };
    users.push(newUser);
    notifyListeners();
  };

  const approveUser = (id: string) => {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex > -1) {
      users[userIndex].status = 'Active';
      notifyListeners();
    }
  };

  const suspendUser = (id: string) => {
    const userIndex = users.findIndex((u) => u.id === id);
    if (userIndex > -1) {
      users[userIndex].status = 'Suspended';
      notifyListeners();
    }
  };

  return { users: currentUsers, addUser, approveUser, suspendUser };
}
