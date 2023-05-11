import { PlaylistModalItem } from '../PlaylistItem/PlaylistModalItem';
import styles from './listsModalContent.module.scss';
import { IoMdAdd } from 'react-icons/io';

interface Props {
	changeModal: () => void;
}

export const ListsModalContent = ({ changeModal }: Props) => {
	return (
		<>
			<h1 className='font-semibold'>Add to playlist</h1>
			<hr />
			<p className='mt-2'>Select a playlist</p>
			<PlaylistModalItem />
			<button onClick={changeModal} className={styles.addPlaylistBtn}>
				Create new Playlist{' '}
				<IoMdAdd style={{ display: 'inline-block', marginBottom: '5px' }} />
			</button>
		</>
	);
};
