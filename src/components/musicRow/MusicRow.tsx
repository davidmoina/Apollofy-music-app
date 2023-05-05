import styles from './musicRow.module.scss';
import { useContext, useState } from 'react';
// icons
import {
	AiFillHeart,
	AiOutlineHeart,
	AiOutlineCaretRight,
} from 'react-icons/ai';
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md';
import { Artist, Track } from '../../interfaces/songs';
import {
	ContextTypeFav,
	FavSongContext,
} from '../../context/favSongsContext/FavSongsContext';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';
import { RiPlayListAddLine } from 'react-icons/ri';

export interface Props {
	thumbnail: string;
	artist: Artist[];
	title: string;
	actualSong: Track;
}

export const MusicRow = ({ actualSong, thumbnail, artist, title }: Props) => {
	const { addToFavorite, removeFromFavorite } = useContext(
		FavSongContext
	) as ContextTypeFav;

	const { audio, addSongToQueue, setCurrent, togglePlaying, songsSet } =
		useContext(PlayerContext);

	const [isLiked, setIsLiked] = useState(actualSong?.liked);
	const [play, setPlay] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	const handleClickSong = () => {
		setIsPlaying(!isPlaying);

		if (actualSong?._id !== audio?._id) {
			songsSet(actualSong);
			setCurrent(0, actualSong);
			return;
		}
		togglePlaying();
	};

	const postData = async (url = '', data = {}) => {
		const response = await fetch(url, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(data),
		});
		return response.json();
	};

	const handleLike = (song: Track) => {
		if (isLiked) {
			setIsLiked(!isLiked);
			song.liked = false;
			postData(`http://localhost:4000/tracks/${song._id}`, {
				...song,
				liked: false,
			});
			removeFromFavorite(song);
		} else {
			setIsLiked(!isLiked);
			postData(`http://localhost:4000/tracks/${song._id}`, {
				...song,
				liked: true,
			});
			song.liked = true;
			addToFavorite(song);
		}
	};

	console.log(isPlaying);

	return (
		<div
			className={styles.rowContainer}
			onMouseEnter={() => setPlay(true)}
			onMouseLeave={() => setPlay(false)}
		>
			<div className={`${styles.songLeftContainer} transition-all`}>
				<span
					className={`text-center ${styles.spanPlay} text-md`}
					onClick={handleClickSong}
				>
					{actualSong._id === audio?._id && isPlaying ? (
						<MdPauseCircleFilled className='text-3xl rounded-lg' />
					) : play ? (
						<MdPlayCircleFilled
							className={`${styles.play} text-3xl rounded-lg text-[#ffff66]`}
						/>
					) : (
						<AiOutlineCaretRight
							className={`${styles.play} text-1xl rounded-lg m-2 text-[#ffffff]`}
						/>
					)}
				</span>
				<img src={thumbnail} alt={title} />
				<div className={styles.songInfo}>
					<span>{title}</span>
					<span>{artist?.map(({ name }) => name).join(' - ')}</span>
				</div>
			</div>
			<p className={`hidden lg:block ${styles.albumTitle}`}>{title}</p>
			<div className={styles.songRightContainer}>
				<RiPlayListAddLine
					onClick={() => addSongToQueue(actualSong)}
					className='cursor-pointer'
				/>
				<span
					className={styles.spanLike}
					onClick={() => handleLike(actualSong)}
				>
					{isLiked ? (
						<AiFillHeart className='text-lg text-[#ffff66]' />
					) : (
						<AiOutlineHeart className='text-lg' />
					)}
				</span>
				<span>3:00</span>
			</div>
		</div>
	);
};
