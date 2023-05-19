import { useEffect, useState } from 'react';
import useUserAuth from '../../hooks/useUserAuth';
import { ImagenUpload } from '../ImageUpload/ImagenUpload';
import styles from './infoUser.module.scss';

export const InfoUser = () => {
	const user = window.localStorage.getItem('User');
	const userData = JSON.parse(user!);
	const { useGetUser } = useUserAuth();
	const [dataUser, setDataUser] = useState<any>({});

	useEffect(() => {
		const fetchUser = async () => {
			if (userData.id) {
				const userInfo = await useGetUser(userData.id);
				setDataUser(userInfo);
			}
		};
		fetchUser();
	}, []);

	return (
		<>
			<h1 className={` ${styles.titlePage}`}>Profile</h1>
			<section
				className={`lg:flex items-center gap-8 border-solid border-b-2 border-neutral-400 py-6 ${styles.sectionDataUser}`}
			>
				<div className='flex flex-col items-center gap-8 justify-start'>
					<img
						src={dataUser.thumbnail}
						alt={dataUser.firstName}
						className={`w-48 rounded-full ${styles.imgUser}`}
					/>
				</div>
				<div
					className={`flex items-center justify-between w-full lg:w-96 lg:block`}
				>
					<div>
						<h2 className={styles.nameUser}>{dataUser.firstName}</h2>
						<h3 className={styles.lastUser}>{dataUser.lastName}</h3>
						<h3 className={styles.userName}>{dataUser.email}</h3>
					</div>
					<br />
					<ImagenUpload />
				</div>
			</section>
		</>
	);
};
