// import { useContext, useState } from 'react';
import { Playlist } from '../../interfaces/playlist';
import styles from './playlistHeader.module.scss';
// import { MdPlayCircleFilled } from 'react-icons/md';
// import { PlayerContext } from '../../context/PlayerContext/PlayerContext';
// import { MdDeleteSweep } from 'react-icons/md';

interface Props {
	data: Playlist<string> | null;
}

function PlaylistHeader({ data }: Props) {
	// const [showPlay, setShowPlay] = useState(false);

	// const { songsSet, setCurrent } = useContext(PlayerContext);

	// const handleClickSong = () => {
	// 	songsSet(data!.tracks);
	// 	setCurrent(0, data?.tracks[0]);
	// };

	return (
		<div className={styles.playlistHeader}>
			<div
			// className='relative'
			// onMouseEnter={() => setShowPlay(true)}
			// onMouseLeave={() => setShowPlay(false)}
			>
				<img
					className={styles.playlistImage}
					src={data?.thumbnail}
					alt={data?.name}
				/>
				{/* <MdPlayCircleFilled
					onClick={handleClickSong}
					className={`cursor-pointer absolute text-5xl rounded-lg z-50 bottom-3 right-0 text-[#ffff66] ${
						!showPlay ? 'opacity-0' : 'opacity-100 bottom-3 right-3'
					} transition-all duration-200`}
				/> */}
			</div>
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
