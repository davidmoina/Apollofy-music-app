import { useNavigate } from 'react-router-dom';
import styles from './card.module.scss';

interface CardArtist {
	key: number | string;
	name: string;
	thumbnail: string;
	id: string;
}

export const CardArtist = ({ name, thumbnail, id }: CardArtist) => {
	const navigate = useNavigate();
	return (
		<div
			className={`flex flex-col w-28 md:w-32 lg:w-48 transition-all duration-200 ${styles.card} cursor-pointer hover:bg`}
			onClick={() => navigate(`/users/${id}`)}
		>
			<div className={`${styles.divPlay} relative`}>
				<img
					src={thumbnail}
					alt={name}
					className={`shadow-lg rounded-full`}
					// style={{ height: '10.5rem' }}
				/>
				<h3 className={styles.songTitle}>{name}</h3>
			</div>
		</div>
	);
};
