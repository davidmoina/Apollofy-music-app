import styles from './card.module.scss';
import { useContext, useState } from 'react';
import { MdPlayCircleFilled } from 'react-icons/md';
import { Track } from '../../interfaces/songs';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';

interface TrackCardProps {
	name: string;
	thumbnail: string;
	artists?: string;
	track: Track;
}

export const CardTrack = ({
	name,
	thumbnail,
	artists = '',
	track,
}: TrackCardProps) => {
	const { songsSet, setCurrent } = useContext(PlayerContext);

	const [showPlay, setShowPlay] = useState(false);

	const handlePlay = () => {
		songsSet(track);
		setCurrent(0);
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
					// alt={artist}
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
			<h5 className={styles.songArtist}>{artists}</h5>
		</div>
	);
};
