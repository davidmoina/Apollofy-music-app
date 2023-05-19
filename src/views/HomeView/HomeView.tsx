import { useFetch } from '../../api/useFetch';
import { CardTrack } from '../../components/Cards/CardTrack';
import { Track } from '../../interfaces/songs';
import { AlbumsView } from '../AlbumsView/AlbumsView';
import { GenreView } from '../GenreView/GenreView';
import styles from '../../containers/CardsContainer/cardsContainer.module.scss';

export const HomeView = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const { data: tracks } = useFetch<Track[]>(`${VITE_APP_SERVICE_URL}/track/`);
	const latestPlayed = tracks?.slice(0, 5);

	return (
		<>
			<h2 className='text-xl md:text-2xl mb-6 font-black m-6 text-gray-300'>
				Recently played
			</h2>
			<div
				className={`flex gap-6 mx-6 mb-5 overflow-x-auto ${styles.containerCard}`}
			>
				{latestPlayed?.map(item => (
					<CardTrack
						key={item._id}
						track={item}
						name={item.name}
						thumbnail={item.thumbnail}
					/>
				))}
			</div>
			<AlbumsView />
			<GenreView />
		</>
	);
};
