import { useState, useEffect, useRef, ChangeEvent, useContext } from 'react';
import { Controls } from '../Controls/Controls';
import { ControlsMobile } from '../Controls/ControlsMobile';
import { formatTime } from '../../../utils/formatTime';
import { Volume } from '../Volume/Volume';
import { InfoTrack } from '../InfoTrack/InfoTrack';
import { AiOutlineClose } from 'react-icons/ai';
import styles from './playerMusic.module.scss';
import { PlayerContext } from '../../../context/PlayerContext/PlayerContext';

export const PlayerMusic = () => {
	const [trackProgress, setTrackProgress] = useState(0);
	const [volume, setVolume] = useState(0.3);
	const {
		audio,
		currentSongNum,
		songsList,
		repeat,
		playing,
		nextSong,
		prevSong,
		toggleRepeat,
		togglePlaying,
		handleEnd,
		toggleRandom,
		random,
	} = useContext(PlayerContext);

	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		return () => {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		};
	}, []);

	const audioRef = useRef(new Audio(songsList[currentSongNum]?.url));
	const intervalRef: { current: number | undefined } = useRef();
	const isReady = useRef(false);

	const { duration } = audioRef.current;

	useEffect(() => {
		if (playing) {
			audioRef.current.play();
			startTimer();
		} else {
			audioRef.current.pause();
			clearInterval(intervalRef.current);
		}
	}, [playing]);

	useEffect(() => {
		audioRef.current.pause();
		audioRef.current = new Audio(songsList[currentSongNum]?.url);
		// setTrackProgress(audioRef.current.currentTime);

		audioRef.current.volume = volume;

		if (isReady.current && playing) {
			audioRef.current.play();
			startTimer();
		} else {
			isReady.current = true;
		}

		setTrackProgress(audioRef.current.currentTime);
	}, [audio, currentSongNum]);

	const startTimer = () => {
		clearInterval(intervalRef.current);

		intervalRef.current = +setInterval(() => {
			if (audioRef.current.ended) {
				handleEnd();
			} else {
				setTrackProgress(audioRef.current.currentTime + 1);
			}
		}, 1000);
	};

	const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>): void => {
		setVolume(parseFloat(event.currentTarget.value));
		audioRef.current.volume = parseFloat(event.currentTarget.value);
	};

	const onScrub = (value: string) => {
		clearInterval(intervalRef.current);
		audioRef.current.currentTime = parseInt(value);
		setTrackProgress(audioRef.current.currentTime);
	};

	const onScrubEnd = () => {
		startTimer();
	};

	const closeModal = () => {
		setShowModal(false);
	};

	return (
		<>
			<div className={`w-full md:hidden ${styles.progressMvl}`}>
				<input
					type='range'
					value={trackProgress}
					step='1'
					min='0'
					max={duration ? Math.round(duration) : `${Math.round(duration)}`}
					className={`w-full md:hidden ${styles.progressBar}`}
					onChange={e => onScrub(e.target.value)}
					onMouseUp={onScrubEnd}
					onKeyUp={onScrubEnd}
				/>
			</div>
			<div
				className={`${styles.containerPlayer} flex justify-center items-center mb-16 pl-0 pr-3 lg:justify-between md:mb-0 md:py-3 md:px-2 lg:px-6`}
			>
				{!showModal ? (
					<>
						<div
							className={`flex-1 w-1/3 ${styles.clickModal}`}
							onClick={() => setShowModal(!showModal)}
						>
							<InfoTrack
								name={songsList[currentSongNum]?.name}
								artist={songsList[currentSongNum]?.artists
									.map(item => item.name)
									.join(' , ')}
								thumbnail={songsList[currentSongNum]?.thumbnail}
							/>
						</div>
						<div className='flex w-1/3 flex-col justify-center lg:justify-end items-end md:items-center'>
							<Controls
								isPlaying={playing}
								onPrevClick={prevSong}
								onNextClick={nextSong}
								onPlayPauseClick={togglePlaying}
								onLoopClick={toggleRepeat}
								loop={repeat}
								toggleRandom={toggleRandom}
								random={random}
							/>
							<div className='hidden md:flex'>
								<span>{formatTime(trackProgress)}</span>
								<input
									type='range'
									value={trackProgress}
									step='1'
									min='0'
									max={
										duration ? Math.round(duration) : `${Math.round(duration)}`
									}
									className={`w-60 lg:w-96 mx-2 ${styles.progressBar}`}
									onChange={e => {
										onScrub(e.target.value);
										console.log(e.target.value);
									}}
									onMouseUp={onScrubEnd}
									onKeyUp={onScrubEnd}
								/>
								<span>{!isNaN(duration) ? formatTime(duration) : '0:00'}</span>
							</div>
						</div>
					</>
				) : (
					<>
						<div
							className={`  ${styles.modal} ${styles.modalEnter} ${styles.modalEnterActive}`}
						>
							<div className={styles.modalContent}>
								<div className={styles.buttonModal}>
									<button onClick={closeModal}>
										<AiOutlineClose />
									</button>
								</div>
								<div
									className={`flex justify-center items-center ${styles.imgSong}`}
								>
									<img src={songsList[currentSongNum]?.thumbnail} alt='' />
								</div>
								<div
									className={`flex flex-col items-center ${styles.infoTrack}`}
								>
									<h2 className='text-white'>
										{songsList[currentSongNum]?.name}
									</h2>
									<h3 className='text-white'>
										{songsList[currentSongNum]?.artists
											.map(item => item.name)
											.join(' , ')}
									</h3>
									<input
										type='range'
										value={trackProgress}
										step='1'
										min='0'
										max={duration ? duration : `${duration}`}
										className={`w-full ${styles.progressBar}`}
										onChange={e => {
											onScrub(e.target.value);
											console.log(e.target.value);
										}}
										onMouseUp={onScrubEnd}
										onKeyUp={onScrubEnd}
									/>
									<div className='flex justify-between w-full mt-0.5'>
										<span>{formatTime(trackProgress)}</span>
										<span>
											{!isNaN(duration) ? formatTime(duration) : '0:00'}
										</span>
									</div>
									<ControlsMobile
										isPlaying={playing}
										onPrevClick={prevSong}
										onNextClick={nextSong}
										onPlayPauseClick={togglePlaying}
										onLoopClick={toggleRepeat}
										loop={repeat}
									/>
								</div>
								<div></div>
							</div>
						</div>
					</>
				)}
				<div className='w-1/3 hidden md:flex justify-end'>
					<Volume volume={volume} onChange={handleVolumeChange} />
				</div>
			</div>
		</>
	);
};
