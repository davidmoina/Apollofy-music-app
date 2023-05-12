import { CreateTrack } from '../../components/CreateTrack/CreateTrack';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../components/Modal/Modal';
import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import { IoMdAdd } from 'react-icons/io';
import styles from '../../components/ListsModalContent/listsModalContent.module.scss';
import { useTrack } from '../../hooks/useTrack';
import { useEffect, useState } from 'react';
import { Track } from '../../interfaces/songs';

export const LibraryView = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const [tracks, setTracks] = useState<Track[]>([]);
	const { getTrackOfUser } = useTrack();

	useEffect(() => {
		(async () => {
			const userTrack = await getTrackOfUser();
			setTracks(userTrack);
		})();
	}, []);

	return (
		<>
			<div>
				<button onClick={openModal} className={styles.addPlaylistBtn}>
					Create new Song{' '}
					<IoMdAdd style={{ display: 'inline-block', marginBottom: '5px' }} />
				</button>
				<Modal isOpen={isOpen} closeModal={closeModal}>
					<CreateTrack />
				</Modal>
			</div>
			<div>
				<SongListContainer tracks={tracks} />
			</div>
		</>
	);
};
