import { Playlist } from '../../interfaces/playlist';
import styles from './playlistHeader.module.scss';

interface Props {
	data: Playlist<string> | null;
}

function PlaylistHeader({ data }: Props) {
	console.log(data?.publicAccessible);

	return (
		<div className={styles.playlistHeader}>
			<img
				className={styles.playlistImage}
				src={data?.thumbnail}
				alt={data?.name}
			/>
			<div className={styles.playlistInfo}>
				<p className={styles.publicPlaylist}>
					{data?.publicAccessible ? 'Public Playlist' : 'Private playlist'}
				</p>
				<h2 className={styles.playlistName}>{data?.name}</h2>
				<div className={styles.creatorInfo}>
					<span className={styles.playlistDescription}>
						{data?.description}
					</span>
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
