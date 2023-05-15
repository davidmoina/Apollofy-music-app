import { useContext } from 'react';
import { useFetch } from '../../api/useFetch';
import { Playlist } from '../../interfaces/playlist';
import { User } from '../../interfaces/user';
import { PlaylistModalItem } from '../PlaylistItem/PlaylistModalItem';
import styles from './listsModalContent.module.scss';
import { IoMdAdd } from 'react-icons/io';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';

interface Props {
	changeModal: () => void;
}

export const ListsModalContent = ({ changeModal }: Props) => {
	const user = JSON.parse(localStorage.getItem('User')!);

	const { selectedTrack } = useContext(PlayerContext);

	const { data } = useFetch<Playlist<User>>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${user.id}`
	);

	const addToPlaylist = async (id: string) => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${id}`,
				{
					method: 'PATCH',
					body: selectedTrack?._id,
				}
			);

			const result = await response.json();

			console.log(result);
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	return (
		<section className={styles.modalContent}>
			<h1 className='font-semibold mb-2'>Add to playlist</h1>
			<hr />
			<p className='mt-2'>Select a playlist</p>
			{data?.map(({ name, userId, thumbnail, _id }) => (
				<PlaylistModalItem
					key={name}
					name={name}
					user={userId}
					thumbnail={thumbnail}
					id={_id}
					addToPlaylist={addToPlaylist}
				/>
			))}

			<button onClick={changeModal} className={styles.addPlaylistBtn}>
				Create new Playlist{' '}
				<IoMdAdd style={{ display: 'inline-block', marginBottom: '5px' }} />
			</button>
		</section>
	);
};
