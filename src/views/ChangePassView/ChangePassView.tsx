import { SubmitHandler, useForm } from 'react-hook-form';
import styles from '../../pages/LoginPage/loginPage.module.scss';
import { InputForm } from '../../components/user/input/input/InputForm';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';

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

		return pass1 === pass2;
	};

	const onSubmit: SubmitHandler<FormInputs> = data => {
		console.log(data);
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
					validations={{
						required: true,
					}}
				>
					{errors.newPassword?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					validate={validatePass}
					id='repeatPassword'
					placeholder='Repeat New Password'
					inputType='password'
					register={register}
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
