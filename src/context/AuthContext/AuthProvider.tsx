import { useReducer } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from './AuthContext';

type Props = {
	children: JSX.Element | JSX.Element[];
};

export interface UserState {
	firstName: string;
	lastName: string;
	email: string;
	token: string;
	id: string;
}
export interface Values {
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
	confirmPassword?: string;
	birthday?: Date;
	isAuthenticated?: boolean;
	error?: string;
	id?: string;
	token?: string;
	user?: UserState | null | undefined;
}

enum ACTIONS {
	LOGIN_SUCCESS = 'LOGIN_SUCCESS',
	LOGIN_ERROR = 'LOGIN_ERROR',
	REGISTER_SUCCESS = 'REGISTER_SUCCESS',
	REGISTER_ERROR = 'REGISTER_ERROR',
	LOGOUT = 'LOGOUT',
	UPDATE_PASSWORD = 'UPDATE_PASSWORD',
	GET_USER_ERROR = 'GET_USER_ERROR',
	USER_RECIEVED = 'USER_RECIEVED',
	USER_REGISTERED = 'USER_REGISTERED',
}

interface LoginActions {
	type: ACTIONS;
	payload?: Values;
}

const initialValue = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
	confirmPassword: '',
	birthday: new Date(),
	id: '',
	token: '',
	isAuthenticated: false,
	error: '',
	user: null,
};

const reducer = (state: Values, action: LoginActions): Values => {
	switch (action.type) {
		case ACTIONS.LOGIN_SUCCESS:
			return {
				email: action.payload?.email,
				password: '',
				id: action.payload?.id,
				token: action.payload?.token,
				isAuthenticated: true,
				error: '',
				user: null,
			};
		case ACTIONS.LOGIN_ERROR:
			return {
				...state,
				error: action.payload?.error,
			};
		case ACTIONS.REGISTER_SUCCESS:
			return {
				firstName: action.payload?.firstName,
				lastName: action.payload?.lastName,
				email: action.payload?.email,
				password: action.payload?.password,
				confirmPassword: action.payload?.confirmPassword,
				birthday: action.payload?.birthday,
				id: action.payload?.id,
				token: action.payload?.token,
				isAuthenticated: true,
				error: '',
				user: null,
			};
		case ACTIONS.REGISTER_ERROR:
			return {
				...state,
				error: action.payload?.error,
			};
		case ACTIONS.LOGOUT:
			return initialValue;

		case ACTIONS.UPDATE_PASSWORD:
			return {
				...state,
				password: action.payload?.password,
			};
		case ACTIONS.GET_USER_ERROR:
			return {
				...state,
				error: action.payload?.error,
			};
		case ACTIONS.USER_RECIEVED:
			return {
				firstName: action.payload?.firstName,
				lastName: action.payload?.lastName,
				email: action.payload?.email,
				birthday: action.payload?.birthday,
				id: action.payload?.id,
				token: action.payload?.token,
				isAuthenticated: true,
				error: '',
				user: null,
			};
		case ACTIONS.USER_REGISTERED:
			return {
				user: action.payload?.user,
			};
		default:
			return state;
	}
};

export const AuthProvider = ({ children }: Props) => {
	const [authState, dispatch] = useReducer(reducer, initialValue);

	const loginSuccess = (email: string, id: string, token: string): void => {
		dispatch({
			type: ACTIONS.LOGIN_SUCCESS,
			payload: {
				email,
				token,
				id,
			},
		});
		toast.success('Logged successfully ', { icon: '🙌' });
	};

	const loginError = (error: string): void => {
		dispatch({
			type: ACTIONS.LOGIN_ERROR,
			payload: {
				error,
			},
		});
		toast.error('Invalid credentials');
	};

	const registerSuccess = (
		firstName: string,
		lastName: string,
		email: string,
		password: string,
		confirmPassword: string,
		birthday: Date,
		id: string,
		token: string
	): void => {
		dispatch({
			type: ACTIONS.REGISTER_SUCCESS,
			payload: {
				firstName,
				lastName,
				email,
				password,
				confirmPassword,
				birthday,
				id,
				token,
			},
		});
		toast.success('Registered successfully ');
	};

	const registerUser = (
		firstName: string,
		lastName: string,
		email: string,
		id: string,
		token: string
	): void => {
		dispatch({
			type: ACTIONS.USER_REGISTERED,
			payload: {
				user: { firstName, lastName, email, id, token },
			},
		});
	};

	const registerError = (error: string): void => {
		dispatch({
			type: ACTIONS.REGISTER_ERROR,
			payload: {
				error,
			},
		});
		toast.error('Invalid register');
	};
	const logout = (): void => {
		dispatch({
			type: ACTIONS.LOGOUT,
		});
		toast('Logged out, we will miss you', { icon: '😢' });
	};

	const updatePassword = (password: string): void => {
		dispatch({
			type: ACTIONS.UPDATE_PASSWORD,
		});
	};

	console.log(authState.user);

	return (
		<AuthContext.Provider
			value={{
				loginSuccess,
				loginError,
				logout,
				authState,
				registerSuccess,
				registerError,
				updatePassword,
				currentUser: authState.user,
				registerUser,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
