import { useForm, SubmitHandler } from 'react-hook-form';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import { InputForm } from '../../components/user/input/input/InputForm';
import { FormInputs } from '../../interfaces';
import styles from '../LoginPage/loginPage.module.scss';
import { useParams } from 'react-router-dom';

export const ResetPass = () => {

	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const {id} = useParams()
	

	const onSubmit: SubmitHandler<FormInputs> = async (data) => {

		const { password } = data;


		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/users/update-password-reset`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({id, password}),
			})
			const json = await response.json();
			console.log(json);
			

		} catch(error) {
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
