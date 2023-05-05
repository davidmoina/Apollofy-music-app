import React from 'react';
import styles from './playlistHeader.module.scss';

// interface Props {
//   name: string;
// }
interface Playlist {
	id: number;
	name: string;
	isFollowed: boolean;
	thumbnail: string;
	description: string;
	publicAccessible: boolean;
	primaryColor: string;
}

function PlaylistHeader(props: Playlist) {
	return (
		<div className={styles.playlistHeader}>
			<img
				className={styles.playlistImage}
				src={props.thumbnail}
				alt={props.name}
			/>
			<div className={styles.playlistInfo}>
				<p className={styles.publicPlaylist}>Public Playlist</p>
				<h2 className={styles.playlistName}>{props.name}</h2>
				<div className={styles.creatorInfo}>
					<span className={styles.playlistDescription}>
						{props.description}
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
