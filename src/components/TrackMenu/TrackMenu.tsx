import styles from './trackMenu.module.scss';
import { Track } from '../../interfaces/songs';
import { toast } from 'react-hot-toast';

interface Props {
	addSongToQueue: (song: Track) => void;
	actualSong: Track;
	openModal: () => void;
	isPlaylist: boolean;
	handleRemoveFromPlaylist: () => void;
	openInfoModal: () => void;
	handleDelete: () => void;
	setSelectedTrack: (track: Track | null) => void;
}

export const TrackMenu = ({
	addSongToQueue,
	actualSong,
	openModal,
	isPlaylist,
	handleRemoveFromPlaylist,
	openInfoModal,
	handleDelete,
	setSelectedTrack,
}: Props) => {
	const handleQueue = () => {
		addSongToQueue(actualSong);
		toast.success('Song added to queue');
		setSelectedTrack(null);
	};

	return (
		<div className={styles.menuContainer}>
			<ul className={styles.menuList}>
				<li onClick={handleQueue}>Add to queue</li>
				<li onClick={openModal}>Add to playlist</li>
				{isPlaylist && (
					<li onClick={handleRemoveFromPlaylist}>Remove from this playlist</li>
				)}
				<li onClick={openInfoModal}>Song Info</li>
				<li onClick={handleDelete}>Delete song</li>
			</ul>
		</div>
	);
};
