import React from 'react';
import { FiClock } from 'react-icons/fi';
import { IconType } from 'react-icons';
import styles from './infoBarPlaylists.module.scss';

const PlaylistInfoBar = () => {
	// const sharp: string = "#";
	const title: string = 'Title';
	const album: string = 'Album';
	const DurationIcon: IconType = FiClock;

	return (
		// <div className={styles.container}>

		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles.album}>{album}</div>
			<div className={styles.timeIcon}>{<DurationIcon />}</div>
		</div>
	);
};

export default PlaylistInfoBar;
