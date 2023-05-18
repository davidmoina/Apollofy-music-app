import { useState, useEffect } from 'react';
import { MdHomeFilled } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { BiLibrary } from 'react-icons/bi';
import { useMediaQuery } from '@react-hook/media-query';
import { FC } from 'react';
import styles from './mobileNav.module.scss';
import { useNavigate } from 'react-router-dom';

interface Props {
	icon: React.ReactNode;
	text: string;
	path: string;
}

export const MobileNavButton = ({ icon, text, path }: Props) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const navigate = useNavigate();

	// const toggleExpanded = () => {
	// 	setIsExpanded(prevState => !prevState);
	// };

	const handleMenu = (path: string) => {
		setIsExpanded(prevState => !prevState);
		navigate(path);
	};

	const handleTransitionEnd = () => {
		if (isExpanded) {
			setIsExpanded(false);
		}
	};

	return (
		<div
			className={`text-center flex flex-col items-center ${
				isExpanded ? 'scale-90 transition duration-100 linear' : 'scale-100'
			}`}
			onClick={() => handleMenu(path)}
			onTransitionEnd={handleTransitionEnd}
		>
			<div className='sidebar-icon'>{icon}</div>
			<p className='text-white text-sm'>{text}</p>
		</div>
	);
};

export const MobileNavBar: FC = () => {
	const mediaQuery = useMediaQuery('(max-width: 768px)');
	const [isPhoneScreen, setIsPhoneScreen] = useState<boolean>(mediaQuery);

	useEffect(() => {
		setIsPhoneScreen(mediaQuery);
	}, [mediaQuery]);

	if (!isPhoneScreen) {
		return null;
	}

	return (
		<nav
			className={`fixed bottom-0 left-0 right-0 flex justify-around items-center shadow-lg ${styles.navMobil}`}
		>
			<MobileNavButton
				icon={<MdHomeFilled size='30' style={{ color: 'white' }} />}
				text='Home'
				path='/'
			/>
			<MobileNavButton
				icon={<BiSearch size='30' style={{ color: 'white' }} />}
				text='Search'
				path='/search'
			/>
			<MobileNavButton
				icon={<BiLibrary size='30' style={{ color: 'white' }} />}
				text='Library'
				path='/library-mobile'
			/>
		</nav>
	);
};

export default MobileNavBar;
