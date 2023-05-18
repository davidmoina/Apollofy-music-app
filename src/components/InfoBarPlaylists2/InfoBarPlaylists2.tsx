
import styles from './InfoBarPlaylists2.module.scss';



const InfoBarPlaylists2 = () => {
	const title: string = 'Title';
	const artist: string = 'Artist';
    const plays: string = 'Plays';
    const minutes: string = 'Minutes';

	return (
		<div className={styles.container}>
			<div className={styles.title}>{title}</div>
			<div className={styles.artist}>{artist}</div>
			<div className={styles.plays}>{plays}</div>
            <div className={styles.minutes}>{minutes}</div>
	    </div>
		
	);
};

export default InfoBarPlaylists2;