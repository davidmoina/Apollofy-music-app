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
			<img className={styles.playlistImage} src={thumbnail} alt={name} />
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

// return (
//   <div className="playlistHeader">
//     <img className="playlistImage" src={props.thumbnail} alt={playlistName} />
//     <div className="playlistInfo">
//       <p className="publicPlaylist">Public Playlist</p>
//       <h2 className="playlistName">{props.name}</h2>
//       <div className="creatorInfo">
//         <span className="creatorName">{props.description}</span>

//       </div>
//     </div>
//   </div>
// );
