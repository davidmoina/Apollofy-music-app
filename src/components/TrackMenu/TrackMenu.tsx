import styles from './trackMenu.module.scss';
import { Track } from '../../interfaces/songs';

interface Props {
	addSongToQueue: (song: Track) => void;
	actualSong: Track;
	openModal: () => void;
	isPlaylist: boolean;
	handleRemoveFromPlaylist: () => void;
}

export const TrackMenu = ({
	addSongToQueue,
	actualSong,
	openModal,
	isPlaylist,
	handleRemoveFromPlaylist,
}: Props) => {
	return (
		<div className={styles.menuContainer}>
			<ul className={styles.menuList}>
				<li onClick={() => addSongToQueue(actualSong)}>Add to queue</li>
				<li onClick={openModal}>Add to playlist</li>
				{isPlaylist && (
					<li onClick={handleRemoveFromPlaylist}>Remove from this playlist</li>
				)}
			</ul>
		</div>
	);
};
