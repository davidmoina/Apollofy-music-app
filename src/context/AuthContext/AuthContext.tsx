import { createContext } from 'react';
import { Values } from './AuthProvider';

export type ContextType = {
	authState: Values;
	loginSuccess: (email: string, id: string, token: string) => void;
	loginError: (error: string) => void;
	logout: () => void;
	registerSuccess: (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		confirmPassword: string,
		birthday: Date,
		id: string,
		token: string
	) => void;
	registerError: (error: string) => void;
	updatePassword: (password: string) => void;
};

export const AuthContext = createContext<ContextType | null>(null);
