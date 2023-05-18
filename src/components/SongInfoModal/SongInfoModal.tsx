import { useContext } from 'react';
import styles from '../ListsModalContent/listsModalContent.module.scss';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';

interface Props {
	closeModal: () => void;
}

export const SongInfoModalContent = ({ closeModal }: Props) => {
	const { selectedTrack } = useContext(PlayerContext);
	console.log(selectedTrack?.duration);
	return (
		<section className={styles.modalContent}>
			<h1 className='font-semibold mb-2'>Song Info</h1>
			<hr />
			<img src={selectedTrack?.thumbnail} height='350' width='350' />
			<p>name: {selectedTrack?.name}</p>
			<p>
				artists: {selectedTrack?.artists.map(({ name }) => name).join(' - ')}
			</p>
			<p>popularity: {selectedTrack?.popularity}</p>
			<p>rating: {selectedTrack?.rating}</p>
			<p className='mt-2'></p>
		</section>
	);
};
