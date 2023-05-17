import {
	TbPlayerPlayFilled,
	TbPlayerSkipForwardFilled,
	TbPlayerSkipBackFilled,
	TbPlayerPauseFilled,
	TbRepeat,
	TbArrowsShuffle,
	// TbRepeatOff,
} from 'react-icons/tb';
import styles from './controls.module.scss';

type TrackControls = {
	isPlaying: boolean;
	onPlayPauseClick: (bool: boolean) => void;
	onPrevClick: () => void;
	onNextClick: () => void;
	onLoopClick: () => void;
	loop: boolean;
};

export const Controls = ({
	isPlaying,
	onPlayPauseClick,
	onPrevClick,
	onNextClick,
	onLoopClick,
	loop,
}: TrackControls) => {
	return (
		<div
			className={`${styles.buttonsPlayer} flex justify-end md:justify-center`}
		>
			<button className='hidden m-2 icon md:block' onClick={onLoopClick}>
				{loop ? <TbArrowsShuffle /> : <TbArrowsShuffle />}
			</button>
			<button
				type='button'
				className='hidden m-2 icon md:block'
				aria-label='Previous'
				onClick={onPrevClick}
			>
				<TbPlayerSkipBackFilled />
			</button>
			{isPlaying ? (
				<button
					type='button'
					className={`m-2 ${styles.buttonPlay}`}
					onClick={() => onPlayPauseClick(false)}
					aria-label='Pause'
				>
					<TbPlayerPauseFilled />
				</button>
			) : (
				<button
					type='button'
					className={`m-2 ${styles.buttonPause}`}
					onClick={() => onPlayPauseClick(true)}
					aria-label='Play'
				>
					<TbPlayerPlayFilled />
				</button>
			)}
			<button
				type='button'
				className='hidden m-2 icon  md:block'
				aria-label='Next'
				onClick={onNextClick}
			>
				<TbPlayerSkipForwardFilled />
			</button>
			<button className='hidden m-2 icon  md:block' onClick={onLoopClick}>
				{loop ? <TbRepeat color={'#f9f999'} /> : <TbRepeat />}
			</button>
		</div>
	);
};
