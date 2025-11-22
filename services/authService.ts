import { User, AuthResponse } from "../types";

// Mock database for demo purposes
const MOCK_USERS_KEY = 'gemini_chat_users';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const getUsers = (): User[] => {
  try {
    return JSON.parse(localStorage.getItem(MOCK_USERS_KEY) || '[]');
  } catch {
    return [];
  }
};

const saveUser = (user: User) => {
  const users = getUsers();
  users.push(user);
  localStorage.setItem(MOCK_USERS_KEY, JSON.stringify(users));
};

export const login = async (email: string, password: string): Promise<AuthResponse> => {
  await delay(800); // Simulate network request

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  // simple validation for demo
  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  // Check against mock "database" or allow specific demo user
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());

  if (user) {
    // In a real app, we would check password hash here
    return {
      user,
      token: 'mock-jwt-token-' + Date.now()
    };
  }

  // For demo convenience, if no user exists with this email, we could throw error
  // but let's enforce Signup for new users to be realistic.
  throw new Error('Invalid email or password');
};

export const signup = async (name: string, email: string, password: string): Promise<AuthResponse> => {
  await delay(1000);

  if (!name || !email || !password) {
    throw new Error('All fields are required');
  }

  if (password.length < 6) {
    throw new Error('Password must be at least 6 characters');
  }

  const users = getUsers();
  if (users.some(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('User with this email already exists');
  }

  const newUser: User = {
    id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
    name,
    email,
    avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`, // Random avatar
  };

  saveUser(newUser);

  return {
    user: newUser,
    token: 'mock-jwt-token-' + Date.now()
  };
};

export const logout = async () => {
  await delay(200);
  // Clear session tokens here in real app
};
