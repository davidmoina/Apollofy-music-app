import { useState } from 'react';
// import { Album } from '../../interfaces/songs';
import { MdPlayCircleFilled } from 'react-icons/md';
import styles from './card.module.scss';

interface LikedByAlbum {
	userId: string;
  }
  export interface AlbumCard {
	title: string;
	year?: string;
	thumbnail: string;
	artist_name: string;
	totalTracks?: number;
	url?: string;
	id?: string;
	userId?: string;
	likedBy?: LikedByAlbum[];
  }

interface AlbumProps {
	key?: number;
	albums: AlbumCard;
}

export const CardAlbum = ({ albums }: AlbumProps)=> {
	const [showPlay, setShowPlay] = useState(false);

	return (
		<div
			key={albums.id}
			className={`flex flex-col w-28 md:w-32 lg:w-48 transition-all duration-200 ${styles.card} cursor-pointer hover:bg`}
			onMouseEnter={() => setShowPlay(true)}
			onMouseLeave={() => setShowPlay(false)}
		>
			<div className={`${styles.divPlay} relative`}>
				<img
					src={albums.thumbnail}
					alt={albums.title}
					className={`shadow-lg rounded-lg ${styles.songCover}`}
				/>
				<MdPlayCircleFilled
					className={`absolute text-5xl rounded-lg z-50 bottom-3 right-0 text-[#ffff66] ${
						!showPlay ? 'opacity-0' : 'opacity-100 bottom-3 right-3'
					} transition-all duration-200`}
				/>
			</div>
			<h3 className={styles.songTitle}>{albums.title}</h3>
			<h5 className={styles.songArtist}>{albums.artist_name}</h5>
		</div>
	);
};
