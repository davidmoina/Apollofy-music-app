import { useState, useEffect } from 'react';
import { useRol } from '../../hooks/useRol';
import { CardArtist } from '../../components/Cards/CardArtist';
import useUserAuth from '../../hooks/useUserAuth';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import styles from './artistsView.module.scss';

interface Artist {
	firstName: string;
	thumbnail: string;
	_id: string;
	rol: string;
}

export const ArtistsView = () => {
	const [artists, setArtists] = useState<Artist[]>([]);
	const { getAllRols } = useRol();
	const { getAllUsers } = useUserAuth();

	useEffect(() => {
		const fetchArtists = async () => {
			try {
				const rolData = await getAllRols();
				const rol = rolData.find((rol: any) => rol.name === 'Artist');
				const usersData = await getAllUsers();
				const artistsData = usersData.filter(
					(user: any) => user.rol === rol._id
				);
				setArtists(artistsData);
			} catch (error) {
				console.log(error);
			}
		};
		fetchArtists();
	}, []);

	return (
		<>
			<div className={styles.headerNoImage} style={{ paddingTop: '5rem' }}>
				<PlaylistHeader name='Artists' />
			</div>
			<div className={styles.contentCard}>
				{artists.map((artist, index) => (
					<CardArtist
						key={index}
						name={artist.firstName}
						thumbnail='https://res.cloudinary.com/dvsab2hi0/image/upload/v1684352672/icons-genre/monkey_higjsm.jpg'
						id={artist._id}
					/>
				))}
			</div>
		</>
	);
};
