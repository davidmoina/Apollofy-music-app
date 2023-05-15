import styles from './musicRow.module.scss';
import { Dispatch, useContext, useState } from 'react';
// icons
import {
	AiFillHeart,
	AiOutlineHeart,
	AiOutlineCaretRight,
} from 'react-icons/ai';
import {
	MdPlayCircleFilled,
	MdPauseCircleFilled,
	MdDangerous,
} from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Artist, Track } from '../../interfaces/songs';
import {
	ContextTypeFav,
	FavSongContext,
} from '../../context/favSongsContext/FavSongsContext';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';
import { TrackMenu } from '../trackMenu/TrackMenu';
import { useTrack } from '../../hooks/useTrack';

export interface Props {
	thumbnail: string;
	artist: Artist[];
	title: string;
	actualSong: Track;
	openModal: () => void;
	menu: boolean;
	setMenu: Dispatch<React.SetStateAction<boolean>>;
	track: Track;
}

export const MusicRow = ({
	actualSong,
	thumbnail,
	artist,
	title,
	openModal,
	menu,
	setMenu,
	track,
}: Props) => {
	const { addToFavorite, removeFromFavorite } = useContext(
		FavSongContext
	) as ContextTypeFav;

	const {
		audio,
		addSongToQueue,
		setCurrent,
		togglePlaying,
		songsSet,
		selectedTrack,
		setSelectedTrack,
	} = useContext(PlayerContext);

	const [isLiked, setIsLiked] = useState(actualSong?.liked);
	const [play, setPlay] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	const { deleteTrack } = useTrack();

	const handleDelete = async () => {
		try {
			console.log(track._id);
			await deleteTrack(track._id);
		} catch (error) {
			console.log((error as Error).message);
		}
	};

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

	const handleMenu = () => {
		setMenu(!menu);

		if (selectedTrack?._id === actualSong._id) {
			setSelectedTrack(null);
			return;
		}

		setSelectedTrack(actualSong);
	};

	return (
		<div
			key={actualSong._id}
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
				<span className='relative' onClick={handleMenu}>
					<BsThreeDotsVertical />
					{selectedTrack?._id === actualSong._id && (
						<>
							<TrackMenu
								addSongToQueue={addSongToQueue}
								actualSong={actualSong}
								openModal={openModal}
							/>
						</>
					)}
				</span>
				<span onClick={handleDelete}>
					<MdDangerous />
				</span>
			</div>
		</div>
	);
};
