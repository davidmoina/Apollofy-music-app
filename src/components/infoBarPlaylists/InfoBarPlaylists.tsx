import { FiClock } from 'react-icons/fi';
// import { MdDeleteSweep } from 'react-icons/md';
import { IconType } from 'react-icons';
import styles from './infoBarPlaylists.module.scss';

interface Props {
	isPlaylist?: boolean;
}

const PlaylistInfoBar = ({ isPlaylist = false }: Props) => {
	// const sharp: string = "#";
	const title: string = 'Title';
	const album: string = 'Album';
	const DurationIcon: IconType = FiClock;

	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles.album}>{album}</div>
			<div className={styles.timeIcon}>
				<DurationIcon />
				{/* {isPlaylist && <MdDeleteSweep />} */}
			</div>
		</div>
	);
};

export default PlaylistInfoBar;
