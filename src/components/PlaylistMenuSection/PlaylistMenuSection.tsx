import { useContext } from 'react';
import { MdDeleteSweep, MdPlayCircleFilled, MdEditNote } from 'react-icons/md';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';
import { Track } from '../../interfaces/songs';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { Modal } from '../Modal/Modal';
import { AddPlaylistModal } from '../AddPlayListModal/AddPlaylistModal';
import { useModal } from '../../hooks/useModal';
import { FavSongContext } from '../../context/FavSongsContext/FavSongsContext';

interface Props {
	tracks: Track[] | undefined;
	id?: string;
}

export const PlaylistMenuSection = ({ tracks, id }: Props) => {
	const { songsSet, setCurrent } = useContext(PlayerContext);
	const { playlistReloading } = useContext(FavSongContext);
	const { closeModal, isOpen, openModal } = useModal();

	const navigate = useNavigate();

	const handleClickSong = () => {
		if (tracks) {
			songsSet(tracks);
			setCurrent(0, tracks[0]);
		}
	};

	const deletePlaylist = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${id}`,
				{
					method: 'DELETE',
				}
			);

			const result = await response.json();

			toast.success('Playlist deleted');
			console.log(result);
			navigate('/');
			console.log('Hola');
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	const handleDelete = () => {
		toast(t => (
			<span className='flex flex-col items-center gap-2'>
				Do you want to delete the playlist?
				<div>
					<button
						onClick={() => {
							toast.dismiss(t.id);
							deletePlaylist();
							playlistReloading();
						}}
						className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800'
					>
						Yes
					</button>

					<button
						onClick={() => {
							{
								toast.dismiss(t.id);
							}
						}}
						type='button'
						className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
					>
						Cancel
					</button>
				</div>
			</span>
		));
	};

	return (
		<div className='flex gap-5 items-center mb-4 mx-10'>
			<MdPlayCircleFilled
				onClick={handleClickSong}
				className={`cursor-pointer text-5xl rounded-lg text-[#ffff66] '
					} transition-all duration-200`}
			/>
			<MdDeleteSweep
				onClick={handleDelete}
				className='cursor-pointer  text-3xl text-[#aaaa83] hover:text-[#e44949] transition-all'
			/>

			<MdEditNote
				onClick={openModal}
				className='cursor-pointer text-3xl text-[#aaaa83] hover:text-[#ffff66] transition-all'
			/>

			<Modal closeModal={closeModal} isOpen={isOpen}>
				{isOpen && <AddPlaylistModal closeModal={closeModal} editId={id} />}
			</Modal>
		</div>
	);
};
