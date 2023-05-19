import { useFetch } from '../../api/useFetch';
import { Playlist } from '../../interfaces/playlist';
import { CardsContainer } from '../../containers/CardsContainer/CardsContainer';
import { useMediaQuery } from '@react-hook/media-query';
import { useEffect, useState } from 'react';
import { MobileLibraryView } from '../MobileLibraryView/MobileLibraryView';
import { Modal } from '../../components/Modal/Modal';
import { AddPlaylistModal } from '../../components/AddPlayListModal/AddPlaylistModal';
import { useModal } from '../../hooks/useModal';
import { User } from '../../interfaces/user';

export const samplePlaylists = {
	id: 1,
	name: 'Road trip! All the masters I need!',
	isFollowed: true,
	thumbnail:
		'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625060/tracks-thumbnails-dev/car_yx6ld1.jpg',
	description:
		'Get your mic on with this beats. You are going to sing all the way down',
	publicAccessible: true,
	primaryColor: '#fbdc00',
};

export const PlaylistsView = () => {
	const mediaQuery = useMediaQuery('(max-width: 768px)');
	const [isPhoneScreen, setIsPhoneScreen] = useState<boolean>(mediaQuery);
	const { isOpen, openModal, closeModal } = useModal();

	useEffect(() => {
		setIsPhoneScreen(mediaQuery);
	}, [mediaQuery]);

	const user = JSON.parse(localStorage.getItem('User')!);

	const { data } = useFetch<Playlist<User>[]>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/all/${user.id}`
	);

	return (
		<>
			{isPhoneScreen ? (
				<MobileLibraryView openModal={openModal} playlists={data} />
			) : (
				<CardsContainer title='All your playlists' playlists={data} />
			)}
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<AddPlaylistModal closeModal={closeModal} />
			</Modal>
		</>
	);
};
