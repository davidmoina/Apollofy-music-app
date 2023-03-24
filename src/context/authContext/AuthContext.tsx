import { createContext } from "react";

export type ContextType = {
  loginSuccess: (email: string, password: string) => void,
  loginError: (error: string) => void,
  logout: () => void
}

export const AuthContext = createContext<ContextType | null>(null);
