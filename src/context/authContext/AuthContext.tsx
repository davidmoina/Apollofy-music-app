import { createContext } from "react";
import { Values } from "./AuthProvider";

export type ContextType = {
  authState: Values,
  loginSuccess: (email: string, id: string, token: string) => void,
  loginError: (error: string) => void,
  logout: () => void
}

export const AuthContext = createContext<ContextType | null>(null);
