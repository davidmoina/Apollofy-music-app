import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../pages/LoginPage/loginPage.module.scss';
import { InputForm } from '../../components/User/Input/InputForm';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../../components/User/Button/ButtonForm';
import { toast } from 'react-hot-toast';

export const ChangePassView = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
		clearErrors,
	} = useForm<FormInputs>();

	const [pass1, pass2] = watch(['newPassword', 'repeatPassword']);

	const validatePass = () => {
		if (pass1 === pass2) {
			clearErrors('repeatPassword');
		}

		console.log(errors);

		return pass1 === pass2;
	};

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const toastId = toast.loading('Please wait...');
		const userId = localStorage.getItem('actualUser');

		console.log(userId);

		try {
			const response = await fetch(
				`${
					import.meta.env.VITE_APP_SERVICE_URL
				}/users/change-password/${userId}`,
				{
					method: 'PUT',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						oldPassword: data.oldPassword,
						newPassword: data.newPassword,
					}),
				}
			);
			const result = await response.json();

			if (response.status === 400) {
				return toast(result.message, {
					id: toastId,
				});
			}

			toast.success('All is good', {
				id: toastId,
			});
			console.log(result);
			return;
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<main className='w-1/4 flex flex-col m-auto mt-28'>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				<h1 className='mb-10 text-2xl text-purple-700 font-extrabold'>
					{' '}
					Change Password{' '}
				</h1>
				<InputForm
					id='oldPassword'
					placeholder='Old Password'
					inputType='password'
					register={register}
					required
					validations={{
						required: true,
					}}
				>
					{errors.oldPassword?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					id='newPassword'
					placeholder='New Password'
					inputType='password'
					register={register}
					required
					validations={{
						required: true,
						pattern:
							/^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{8,16}$/,
					}}
				>
					<>
						{errors.newPassword?.type === 'pattern' && (
							<span className='errorMessage'>
								Password must don't have white spaces
							</span>
						)}
						{errors.newPassword?.type === 'required' && (
							<span className='errorMessage'>Field required</span>
						)}
					</>
				</InputForm>
				<InputForm
					validate={validatePass}
					id='repeatPassword'
					placeholder='Repeat New Password'
					inputType='password'
					register={register}
					required
					validations={{
						required: true,
						validate: validatePass,
					}}
				>
					<>
						{errors.repeatPassword?.type === 'required' && (
							<span className='errorMessage'>Field required</span>
						)}
						{errors.repeatPassword?.type === 'validate' && (
							<span className='errorMessage'>Passwords must match</span>
						)}
					</>
				</InputForm>
				<div className='flex justify-center'>
					<ButtonForm name='Change Password' />
				</div>
			</form>
		</main>
	);
};
