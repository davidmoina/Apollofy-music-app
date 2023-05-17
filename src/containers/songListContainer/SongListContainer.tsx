import { useState } from 'react';
import { AddPlaylistModal } from '../../components/AddPlayListModal/AddPlaylistModal';
import { ListsModalContent } from '../../components/ListsModalContent/ListsModalContent';
import { Modal } from '../../components/Modal/Modal';
import { MusicRow } from '../../components/MusicRow/MusicRow';
import { useModal } from '../../hooks/useModal';
import { Track } from '../../interfaces/songs';

interface Props {
	tracks: Track[] | undefined;
}

export const SongListContainer = ({ tracks }: Props) => {
	const { isOpen, openModal, closeModal } = useModal();
	const [menu, setMenu] = useState(false);
	const {
		isOpen: activeAddModal,
		openModal: openAddModal,
		closeModal: closeAddModal,
	} = useModal();

	const changeModal = () => {
		closeModal();

		openAddModal();
	};

	return (
		<div className='flex flex-col p-4 gap-3'>
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
				/>
			))}
			<Modal isOpen={isOpen} closeModal={closeModal}>
				<ListsModalContent closeModal={closeModal} changeModal={changeModal} />
			</Modal>

			<Modal isOpen={activeAddModal} closeModal={closeAddModal}>
				<AddPlaylistModal closeModal={closeAddModal} />
			</Modal>
		</div>
	);
};
