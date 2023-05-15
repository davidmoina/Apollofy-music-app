import { User } from '../../interfaces/user';
import styles from './playlistItem.module.scss';

interface Props {
	name: string;
	user: User;
	thumbnail: string;
	id: string;
	addToPlaylist: (id: string) => void;
}

export const PlaylistModalItem = ({
	name,
	user,
	thumbnail,
	id,
	addToPlaylist,
}: Props) => {
	return (
		<div className={styles.playlistContainer} onClick={() => addToPlaylist(id)}>
			<img className={styles.playlistImg} src={thumbnail} alt='' />
			<div className={styles.infoPlaylist}>
				<p>{name}</p>
				<p>{`${user.firstName} ${user.lastName}`}</p>
			</div>
		</div>
	);
};
