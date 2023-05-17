import { useEffect, useState } from 'react';
import { CreateTrack } from '../../components/CreateTrack/CreateTrack';
import { useModal } from '../../hooks/useModal';
import { Modal } from '../../components/Modal/Modal';
import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';
import { useTrack } from '../../hooks/useTrack';
import { Track } from '../../interfaces/songs';
import { IoMdAdd } from 'react-icons/io';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import styles from '../../components/ListsModalContent/listsModalContent.module.scss';
import style from './libraryView.module.scss';

export const LibraryView = () => {
	const { isOpen, openModal, closeModal } = useModal();
	const [tracks, setTracks] = useState<Track[]>([]);
	const { getTrackOfUser } = useTrack();

	useEffect(() => {
		(async () => {
			const userTrack = await getTrackOfUser();
			setTracks(userTrack);
		})();
	}, [isOpen]);

	return (
		<>
			<div className={style.headerNoImage} style={{ paddingTop: '5rem' }}>
				<PlaylistHeader name='My Songs' />
			</div>
			<div className={`${styles.modalContent + ' ' + style.contentButton}`}>
				<button onClick={openModal} className={styles.addPlaylistBtn}>
					Create new Song{' '}
					<IoMdAdd style={{ display: 'inline-block', marginBottom: '5px' }} />
				</button>
				<Modal isOpen={isOpen} closeModal={closeModal}>
					<CreateTrack closeModal={closeModal} />
				</Modal>
			</div>
			<div>
				<SongListContainer tracks={tracks} />
			</div>
		</>
	);
};
