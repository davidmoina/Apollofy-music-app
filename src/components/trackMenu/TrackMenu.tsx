import styles from './trackMenu.module.scss';
import { Track } from '../../interfaces/songs';

interface Props {
	addSongToQueue: (song: Track) => void;
	actualSong: Track;
	openModal: () => void;
}

export const TrackMenu = ({ addSongToQueue, actualSong, openModal }: Props) => {
	return (
		<div className={styles.menuContainer}>
			<ul className={styles.menuList}>
				<li onClick={() => addSongToQueue(actualSong)}>Add to queue</li>
				<li onClick={openModal}>Add to playlist</li>
			</ul>
		</div>
	);
};
