import styles from './loginPage.module.scss';
import { InputForm } from '../../components/User/input/input/InputForm';
import { ButtonForm } from '../../components/User/input/button/ButtonForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '../../interfaces';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import useUserAuth from '../../hooks/useUserAuth';

export const LoginPage = () => {
	const { useLogin } = useUserAuth();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit: SubmitHandler<FormInputs> = async (data: FormInputs) => {
		useLogin(data);
	};

	return (
		<>
			<main className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<h3>Welcome back,</h3>
					<h1>Login to your account</h1>
					<InputForm
						id='email'
						placeholder='Email'
						inputType='email'
						register={register}
						errors={errors}
						required
					/>
					<InputForm
						id='password'
						placeholder='Password'
						inputType='password'
						register={register}
						errors={errors}
						required
					/>
					<div className={styles.rememberContainer}>
						<div className={styles.checkContainer}>
							<input
								type='checkbox'
								id='cbx2'
								className={styles.cbx2}
								style={{ display: 'none' }}
							/>
							<label htmlFor='cbx2' className={styles.check}>
								<svg width='18px' height='18px' viewBox='0 0 18 18'>
									<path d='M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z'></path>
									<polyline points='1 9 7 14 15 4'></polyline>
								</svg>
							</label>
							<span>Remember me</span>
						</div>
						<span>Forgot Password</span>
					</div>
					<ButtonForm name='Sign In' />
				</form>
				<p className={styles.noAccountText}>
					Don't have an account? Join free today
				</p>
			</main>
			<BackgroundAnimated />
		</>
	);
};
