import { useState } from 'react';
import { AddPlaylistModal } from '../../components/AddPlayListModal/AddPlaylistModal';
import { ListsModalContent } from '../../components/ListsModalContent/ListsModalContent';
import { Modal } from '../../components/Modal/Modal';
import { useModal } from '../../hooks/useModal';
import { Track } from '../../interfaces/songs';
import { MusicRow } from '../../components/MusicRow/MusicRow';
import { SongInfoModalContent } from '../../components/SongInfoModal/SongInfoModal';

interface Props {
	tracks: Track[] | null | undefined;
	isPlaylist?: boolean;
	reloadData?: () => void;
}

export const SongListContainer = ({
	tracks,
	isPlaylist = false,
	reloadData,
}: Props) => {
	const { isOpen, openModal, closeModal } = useModal();
	const [menu, setMenu] = useState(false);
	const {
		isOpen: activeAddModal,
		openModal: openAddModal,
		closeModal: closeAddModal,
	} = useModal();
	const {
		isOpen: activeInfoModal,
		openModal: openInfoModal,
		closeModal: closeInfoModal,
	} = useModal();

	const changeModal = () => {
		closeModal();

		openAddModal();
	};

	return (
		<div className='flex flex-col p-4 gap-2'>
			{tracks?.map(song => (
				<MusicRow
					thumbnail={song.thumbnail}
					artist={song.artists}
					title={song.name}
					actualSong={song}
					key={song._id}
					openModal={openModal}
					menu={menu}
					setMenu={setMenu}
					track={song}
					isPlaylist={isPlaylist}
					reloadData={reloadData}
					openInfoModal={openInfoModal}
				/>
			))}
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<ListsModalContent closeModal={closeModal} changeModal={changeModal} />
			</Modal>

			<Modal isOpen={activeAddModal} closeModal={closeAddModal}>
				<AddPlaylistModal closeModal={closeAddModal} />
			</Modal>
			<Modal isOpen={activeInfoModal} closeModal={closeInfoModal}>
				<SongInfoModalContent closeModal={closeInfoModal} />
			</Modal>
		</div>
	);
};
