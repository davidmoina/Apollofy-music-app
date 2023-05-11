import styles from './playlistItem.module.scss';

export const PlaylistModalItem = () => {
	return (
		<div className={styles.playlistContainer}>
			<img
				className={styles.playlistImg}
				src='https://i.scdn.co/image/ab67616d0000b2738cb690f962092fd44bbe2bf4'
				alt=''
			/>
			<div className={styles.infoPlaylist}>
				<p>Name</p>
				<p>User</p>
			</div>
		</div>
	);
};
