import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import { ButtonForm } from '../../components/User/Button/ButtonForm';
import { InputForm } from '../../components/User/Input/InputForm';
import styles from '../LoginPage/loginPage.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from '../../interfaces';
import useUserAuth from '../../hooks/useUserAuth';
import { Link } from 'react-router-dom';

export const RegisterPage = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<FormInputs>();

	const { useRegister } = useUserAuth();

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		await useRegister(data);
	};

	return (
		<>
			<main className={styles.container}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
					<h3>Welcome!</h3>
					<h1>Create your new account</h1>
					<div className={`${styles.inputsContainer} w-full p-0`}>
						<InputForm
							id='firstName'
							placeholder='First Name'
							inputType='text'
							register={register}
							errors={errors}
							required
						/>
						<InputForm
							id='lastName'
							placeholder='Last Name'
							inputType='text'
							register={register}
							errors={errors}
							required
						/>
					</div>
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
					<InputForm
						id='confirmPassword'
						placeholder='Repeat Password'
						inputType='password'
						register={register}
						errors={errors}
						required
					/>
					<InputForm 
						id='birthday'
						placeholder='Birthday'
						inputType='date'
						register={register}
						errors={errors}
						required
					/>
					
						<div className='flex flex-col items-center justify-center -translate-y-4'>
							<label
								className='text-xl translate-y-3'
								style={{ color: 'rgba(123, 88, 228, 0.7)', fontWeight: 'bold'}}
							>
								Rol
							</label>
							<br />
							<select
								className='text-white'
								defaultValue={'User'}
								id='genre'
								{...register('rol')}
								style={{
									backgroundColor: 'rgba(76, 70, 101, 0)',
									width: '50%',
									marginBottom: '2rem',
									padding: '0.5rem',
									border: '1px solid #8f85ad',
									borderRadius: '5px',
								}}
							>
									<option key="User" value="User">
										User
									</option>
									<option key="Artist" value="Artist">
										Artist
									</option>
			
							</select>
						</div>
					
					<div className='flex justify-center'>
						<ButtonForm name='Sign Up' />
					</div>
				</form>
				<Link to='/login' className={`${styles.noAccountText} z-10 cursor-pointer hover:underline`}>
					Already have an account? Access here!
				</Link>
			</main>
			<BackgroundAnimated />
		</>
	);
};
