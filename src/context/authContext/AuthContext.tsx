import { createContext } from "react";

type ContextType = {
  dataAuth: () => void
}

export const AuthContext = createContext<ContextType>();
