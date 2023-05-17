import { useFetch } from '../../api/useFetch';
import { CardsContainer } from '../../containers/CardsContainer/CardsContainer';
import { Track } from '../../interfaces/songs';
import { AlbumsView } from '../AlbumsView/AlbumsView';
import { GenreView } from '../GenreView/GenreView';

export const HomeView = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const { data: tracks } = useFetch<Track[]>(`${VITE_APP_SERVICE_URL}/track/`);
	const latestPlayed = tracks?.slice(0, 5);

	return (
		<>
			<CardsContainer
				title='Recently played'
				playlists={latestPlayed}
				isPlayable
			/>
			<AlbumsView />
			<GenreView />
		</>
	);
};
