import { useEffect, useState } from 'react';
import { Track } from '../../interfaces/songs';
import { FavSongContext } from './FavSongsContext';

type ChildrenProps = {
	children: JSX.Element | JSX.Element[];
};

export const FavSongProvider = ({ children }: ChildrenProps) => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const [toggle, setToggle] = useState(true);
	const user = localStorage.getItem('User');
	const userId = user ? JSON.parse(user).id : '';
	const [data, setData] = useState<Track[]>([]);

	const addToFavorite = async (song: Track) => {
		const songId = song._id;

		const response = await fetch(
			`${VITE_APP_SERVICE_URL}/users/likes/${userId}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ songId }),
			}
		);
		const data = await response.json();
		console.log(data);
		setToggle(!toggle);
	};

	useEffect(() => {
		getLikedSongs(userId);
	}, [toggle]);

	const removeFromFavorite = async (song: Track) => {
		const songId = song._id;

		const response = await fetch(
			`${VITE_APP_SERVICE_URL}/users/dislikes/${userId}`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ songId }),
			}
		);
		const data = await response.json();
		console.log(data);
		setToggle(!toggle);
	};

	const getLikedSongs = async (userId: string) => {
		const response = await fetch(
			`${VITE_APP_SERVICE_URL}/users/likes/${userId}`,
			{
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			}
		);
		const data = await response.json();
		setData(data);
	};

	return (
		<FavSongContext.Provider
			value={{
				addToFavorite,
				removeFromFavorite,
				setToggle,
				toggle,
				data,
				getLikedSongs,
			}}
		>
			{children}
		</FavSongContext.Provider>
	);
};
