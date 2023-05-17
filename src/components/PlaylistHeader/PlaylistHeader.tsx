import styles from './playlistHeader.module.scss';

interface Props {
	thumbnail?: string;
	publicAccessible?: boolean;
	description?: string;
	name?: string;
}

function PlaylistHeader({
	thumbnail,
	publicAccessible,
	description,
	name,
}: Props) {
	return (
		<div className={styles.playlistHeader}>
			<div>
				<img className={styles.playlistImage} src={thumbnail} alt={name} />
			</div>
			<div className={styles.playlistInfo}>
				<p className={styles.publicPlaylist}>
					{publicAccessible ? 'Public Playlist' : 'Private playlist'}
				</p>
				<h2 className={styles.playlistName}>{name}</h2>
				<div className={styles.creatorInfo}>
					<span className={styles.playlistDescription}>{description}</span>
				</div>
			</div>
		</div>
	);
}

export default PlaylistHeader;
