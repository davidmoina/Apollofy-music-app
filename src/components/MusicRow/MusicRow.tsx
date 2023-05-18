import styles from './musicRow.module.scss';
import { Dispatch, useContext, useState } from 'react';
// icons
import {
	AiFillHeart,
	AiOutlineHeart,
	AiOutlineCaretRight,
} from 'react-icons/ai';
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { Artist, Track } from '../../interfaces/songs';
import {
	ContextTypeFav,
	FavSongContext,
} from '../../context/FavSongsContext/FavSongsContext';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';
import { TrackMenu } from '../TrackMenu/TrackMenu';
import { useTrack } from '../../hooks/useTrack';
import { toast } from 'react-hot-toast';
import { useParams } from 'react-router-dom';

export interface Props {
	thumbnail: string;
	artist: Artist[];
	title: string;
	actualSong: Track;
	openModal: () => void;
	menu: boolean;
	setMenu: Dispatch<React.SetStateAction<boolean>>;
	track: Track;
	isPlaylist: boolean;
	reloadData?: () => void;
	openInfoModal: () => void;
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
	isPlaylist,
	reloadData,
	openInfoModal,
}: Props) => {
	const { addToFavorite, removeFromFavorite, setToggle, toggle, data } =
		useContext(FavSongContext) as ContextTypeFav;

	const {
		audio,
		addSongToQueue,
		setCurrent,
		togglePlaying,
		songsSet,
		selectedTrack,
		setSelectedTrack,
	} = useContext(PlayerContext);

	const [play, setPlay] = useState(false);
	const [isPlaying, setIsPlaying] = useState(false);

	const [isLiked, setIsLiked] = useState(
		data?.find(song => song._id === actualSong._id) && true
	);

	const { id } = useParams();

	const { deleteTrack } = useTrack();

	const handleDelete = async () => {
		try {
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

	const handleLike = (song: Track) => {
		if (isLiked) {
			setIsLiked(!isLiked);
			setToggle(!toggle);
			removeFromFavorite(song);
		} else {
			setIsLiked(!isLiked);
			setToggle(!toggle);
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

	const handleRemoveFromPlaylist = async () => {
		toast.success('Removed from this playlist');

		const songId = actualSong._id;
		console.log(id);

		const response = await fetch(
			`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/track/${id}`,
			{
				method: 'DELETE',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ songId }),
			}
		);
		const data = await response.json();
		if (reloadData) {
			reloadData();
		}
		console.log(data);
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
					<span className={styles.title}>{title}</span>
					<span className={styles.artists}>
						{artist?.map(({ name }) => name).join(' , ')}
					</span>
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
				<span className={styles.timeSpan}>3:00</span>
				<span className='relative'>
					<BsThreeDotsVertical onClick={handleMenu} />
					{selectedTrack?._id === actualSong._id && (
						<>
							<TrackMenu
								addSongToQueue={addSongToQueue}
								actualSong={actualSong}
								openModal={openModal}
								isPlaylist={isPlaylist}
								handleRemoveFromPlaylist={handleRemoveFromPlaylist}
								handleDelete={handleDelete}
								openInfoModal={openInfoModal}
								setSelectedTrack={setSelectedTrack}
							/>
						</>
					)}
				</span>
			</div>
		</div>
	);
};
