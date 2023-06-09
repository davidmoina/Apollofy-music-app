import styles from './editProfile.module.scss';
import { InputForm } from '../../components/User/Input/InputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../../components/User/Button/ButtonForm';
import useUserAuth from '../../hooks/useUserAuth';
import { useEffect, useState } from 'react';
import { InfoUser } from '../../components/InfoUser/InfoUser';
import { Link } from 'react-router-dom';
//import { ImagenUpload } from '../../components/ImageUpload/ImagenUpload';

export interface UserData {
	birthday: Date;
	createdAt: Date;
	email: string;
	firstName: string;
	lastName: string;
	password: string;
	updatedAt: string;
	__v: number;
	_id: string;
}
export const EditProfile = () => {
	const user = window.localStorage.getItem('User');
	const userData = JSON.parse(user!);
	const { useGetUser, useUpdateUser } = useUserAuth();
	const [datos, setData] = useState<any>({});

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<FormInputs>({
		defaultValues: {
			firstName: datos.firstName,
			lastName: datos.lastName,
			email: datos.email,
		},
	});

	useEffect(() => {
		(async () => {
			const userInfo = await useGetUser(userData.id);
			setData(userInfo);
			reset(userInfo);
		})();
	}, [reset]);

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		useUpdateUser(data, datos._id);
	};

	return (
		<>
			<section>
				<InfoUser />
				{/* <ImagenUpload /> */}
			</section>
			<div className={`mt-7 ${styles.container}`}>
				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<h1>Edit profile</h1>
					<div className='flex flex-col md:flex-row items-center gap-8 justify-start'>
						<div>
							<InputForm
								id='firstName'
								placeholder='Name'
								inputType='text'
								register={register}
								errors={errors}
								defaultValue={datos?.firstName}
								required
							/>
							<InputForm
								id='lastName'
								placeholder='Last Name'
								inputType='text'
								register={register}
								errors={errors}
								defaultValue={datos?.lastName}
								required
							/>
						</div>
						<div>
							<InputForm
								id='email'
								placeholder='Email'
								inputType='email'
								register={register}
								errors={errors}
								defaultValue={datos?.email}
								required
							/>
							<InputForm
								id='birthday'
								placeholder='Date of birth'
								inputType='date'
								register={register}
								errors={errors}
								required
							/>
						</div>
					</div>

					<ButtonForm name='Save' />
					<div className='text-center mt-3'>
						<Link
							className='text-gray-400 text-md hover:text-indigo-500'
							to='/change-password'
						>
							Change password
						</Link>
					</div>
				</form>
			</div>
		</>
	);
};
