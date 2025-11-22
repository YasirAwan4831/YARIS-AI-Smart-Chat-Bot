export enum Role {
  USER = 'user',
  MODEL = 'model',
}

export interface Message {
  id: string;
  role: Role;
  text: string;
  timestamp: number;
  isError?: boolean;
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
  createdAt: number;
  updatedAt: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface ChatState {
  conversations: Conversation[];
  activeConversationId: string | null;
  isSidebarOpen: boolean;
  isTyping: boolean;
}

export interface AuthResponse {
  user: User;
  token: string;
}

// Simulating database response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}
