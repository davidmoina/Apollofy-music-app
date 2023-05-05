import { useContext } from 'react';
import { FormInputs } from '../interfaces';
import { AuthContext, ContextType } from '../context/authContext/AuthContext';
import { useNavigate } from 'react-router-dom';

function useUserAuth() {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const {
		loginSuccess,
		loginError,
		authState,
		registerSuccess,
		registerError,
	} = useContext(AuthContext) as ContextType;
	const navigate = useNavigate();

	const useLogin = async (data: FormInputs) => {
		const { email, password } = data;
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/users/login/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			});
			const json = await response.json();
			console.log(json);

			const { id, token } = json;
			loginSuccess(email, id, token);
			console.log(authState);
			navigate('/');
		} catch {
			loginError('Invalid credentials');
		}
	};

	const useRegister = async (data: FormInputs) => {
		const { firstName, lastName, email, password, confirmPassword, birthday } =
			data;
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/users/register/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					firstName,
					lastName,
					email,
					password,
					confirmPassword,
					birthday,
				}),
			});
			const json = await response.json();
			const { id, token } = json;
			if (!response.ok) {
				return;
			}
			registerSuccess(
				firstName!,
				lastName!,
				email,
				password,
				confirmPassword!,
				birthday!,
				id,
				token
			);
			navigate('/');
		} catch {
			registerError('Invalid Registration');
		}
	};

	return {
		useLogin,
		useRegister,
	};
}
export default useUserAuth;
