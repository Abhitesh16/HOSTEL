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
  status: 'Active' | 'Pending';
}

let users: User[] = [
  { id: 'USR001', name: 'Alka Sharma', email: 'alka@example.com', status: 'Active' },
  { id: 'USR002', name: 'Rahul Bose', email: 'rahul@example.com', status: 'Active' },
];

let listeners: (() => void)[] = [];

function notifyListeners() {
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
    const newUser: User = {
      id: `USR${String(users.length + 1).padStart(3, '0')}`,
      name,
      email,
      status: 'Pending',
    };
    users.push(newUser);
    notifyListeners();
  };

  return { users: currentUsers, addUser };
}
