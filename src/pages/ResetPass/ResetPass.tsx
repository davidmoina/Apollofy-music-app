import { useForm, SubmitHandler } from 'react-hook-form';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import { ButtonForm } from '../../components/User/Button/ButtonForm';
import { InputForm } from '../../components/User/Input/InputForm';
import { FormInputs } from '../../interfaces';
import styles from '../LoginPage/loginPage.module.scss';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import {
	AuthContext,
	ContextType,
} from '../../context/AuthContext/AuthContext';

export const ResetPass = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const { loginSuccess } = useContext(AuthContext) as ContextType;
	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const { id } = useParams();

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const { password, repeatPassword } = data;

		try {
			const response = await fetch(
				`${VITE_APP_SERVICE_URL}/users/update-password-reset`,
				{
					method: 'PATCH',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ id, password, repeatPassword }),
				}
			);
			const json = await response.json();
			if (!response.ok) {
				return;
			}
			console.log(json);
			const { token, email } = json;
			window.localStorage.setItem('User', JSON.stringify({ email, id, token }));
			loginSuccess(email, id!, token);
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<main className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<h1> Set a new Password </h1>
					<InputForm
						id='password'
						placeholder='New Password'
						inputType='password'
						register={register}
						errors={errors}
						required
					/>
					<InputForm
						id='repeatPassword'
						placeholder='Repeat New Password'
						inputType='password'
						register={register}
						errors={errors}
						required
					/>
					<div className='flex justify-center'>
						<ButtonForm name='Save New Password' />
					</div>
				</form>
				<p className={styles.noAccountText}>
					Already have an account? Access here!
				</p>
			</main>
			<BackgroundAnimated />
		</>
	);
};
