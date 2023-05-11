import { useForm, SubmitHandler } from 'react-hook-form';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import { InputForm } from '../../components/user/input/input/InputForm';
import { FormInputs } from '../../interfaces';
import styles from '../LoginPage/loginPage.module.scss';
import { AuthContext, ContextType } from '../../context/authContext/AuthContext';
import { useContext } from 'react';

export const ForgotPassword = () => {

	const {
		authState
	} = useContext(AuthContext) as ContextType;

	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const { token } = authState

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {

		const {email} = data;

		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/users/password-reset`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({email, token, url: VITE_APP_SERVICE_URL}),
			})
			const json = await response.json();
			console.log(json);
			

		} catch {

		}
	};

	return (
		<>
			<main className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<h1> Password Recovery </h1>
					<InputForm
						id='email'
						placeholder='Email'
						inputType='email'
						register={register}
						errors={errors}
						required
					/>
					<div className='flex justify-center'>
						<ButtonForm name='Request New Password' />
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
