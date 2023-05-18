import styles from './InfoBarPlaylistsGenreStats.module.scss';



const InfoBarPlaylistsGenreStats = () => {

	const genre: string = 'Genre';
    const plays: string = 'Plays';
    const minutes: string = 'Minutes';

	return (
		<div className={styles.container}>
			<div className={styles.genre}>{genre}</div>
			<div className={styles.plays}>{plays}</div>
            <div className={styles.minutes}>{minutes}</div>
	    </div>
		
	);
};

export default InfoBarPlaylistsGenreStats;