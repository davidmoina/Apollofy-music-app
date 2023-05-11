import styles from '../LoginPage/loginPage.module.scss';
import { InputForm } from '../../components/user/input/input/InputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import useUserAuth from '../../hooks/useUserAuth';
import { useEffect, useState } from 'react';
import { users } from '../../data/users';

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

	const onSubmit: SubmitHandler<FormInputs> = data => {
		useUpdateUser(data, datos._id);
	};

	return (
		<div className={styles.container}>
			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<h1>Edit profile</h1>
				<div>
					<InputForm
						id='firstName'
						placeholder='Name'
						inputType='text'
						register={register}
						errors={errors}
						defaultValue={datos?.firstName}
					/>
					<InputForm
						id='lastName'
						placeholder='Last Name'
						inputType='text'
						register={register}
						errors={errors}
						defaultValue={datos?.lastName}
					/>
					<InputForm
						id='email'
						placeholder='Email'
						inputType='email'
						register={register}
						errors={errors}
						defaultValue={datos?.email}
					/>
					<InputForm
						id='birthday'
						placeholder='Date of birth'
						inputType='date'
						register={register}
						errors={errors}
					/>
				</div>

				<ButtonForm name='Save' />
			</form>
		</div>
	);
};
