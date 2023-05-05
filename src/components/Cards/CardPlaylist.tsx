import styles from './card.module.scss';
import { Track } from '../../interfaces/songs';
import { useState, useContext } from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';

interface PlaylistRecommendationProps {
	key: number;
	playlists: Track;
	isPlayable: boolean;
}

export const CardPlaylist = ({
	playlists,
	isPlayable,
}: PlaylistRecommendationProps) => {
	const { thumbnail, artist, name } = playlists;

	const { songsSet, setCurrent } = useContext(PlayerContext);

	const [showPlay, setShowPlay] = useState(false);

	const handlePlay = () => {
		if (isPlayable) {
			songsSet(playlists);
			setCurrent(0, playlists);
		}
	};

	return (
		<div
			className={`flex flex-col w-28 md:w-32 lg:w-48 transition-all duration-200 ${styles.card} cursor-pointer hover:bg`}
			onMouseEnter={() => setShowPlay(true)}
			onMouseLeave={() => setShowPlay(false)}
		>
			<div className={`${styles.divPlay} relative`}>
				<img
					src={thumbnail}
					alt={artist}
					className={`shadow-lg rounded-lg ${styles.songCover}`}
				/>
				<MdPlayCircleFilled
					onClick={handlePlay}
					className={`absolute text-5xl rounded-lg z-50 bottom-3 right-0 text-[#ffff66] ${
						!showPlay ? 'opacity-0' : 'opacity-100 bottom-3 right-3'
					} transition-all duration-200`}
				/>
			</div>
			<h3 className={styles.songTitle}>{name}</h3>
			<h5 className={styles.songArtist}>{artist}</h5>
		</div>
	);
};
