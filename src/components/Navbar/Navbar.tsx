import { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';
import styles from './navBar.module.scss';
import { AuthContext } from '../../context/AuthContext/AuthContext';
import { Link } from 'react-router-dom';
import useUserAuth from '../../hooks/useUserAuth';

export const Navbar = () => {
	const navigate = useNavigate();
	const [showModal, setShowModal] = useState(false);

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

	const { logout } = useContext(AuthContext);

	function handleClick() {
		setShowModal(!showModal);
	}

	function handleLogout() {
		localStorage.removeItem('User');
		logout();
		navigate('/welcome');
	}

	return (
		<nav
			className={`flex justify-end lg:justify-between px-5 pt-5 z-30 ${styles.containerNav}`}
		>
			<div className={`hidden lg:flex ${styles.arrowNav}`}>
				<button onClick={() => navigate(-1)}>
					<MdArrowBackIosNew />
				</button>
				<button onClick={() => navigate(1)}>
					<MdArrowForwardIos />
				</button>
			</div>
			<div>
				<button
					className={`flex flex-row items-center p-1 lg:pr-4  mr-0 lg:min-w-fit lg:mr-2 ${styles.buttonProfile}`}
					onClick={handleClick}
				>
					<img src={dataUser.thumbnail} alt='' />

					<span className='hidden lg:flex'>{dataUser?.firstName}</span>
				</button>
				{showModal ? (
					<ul className='right-4 z-10'>
						<li onClick={() => setShowModal(!showModal)}>
							<Link to='/edit-profile'> Edit Profile </Link>
						</li>
						<li onClick={() => setShowModal(!showModal)}>
							<Link to='/'>Admin</Link>
						</li>
						<li>
							<button onClick={handleLogout}> Logout </button>
						</li>
					</ul>
				) : null}
			</div>
		</nav>
	);
};
