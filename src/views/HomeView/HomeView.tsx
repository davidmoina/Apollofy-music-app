import { useFetch } from '../../api/useFetch';
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer';
import { Track } from '../../interfaces/songs';
import { AlbumsView } from '../AlbumsView/AlbumsView';
import { GenreView } from '../GenreView/GenreView';

export const HomeView = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const { data: tracks } = useFetch<Track[]>(`${VITE_APP_SERVICE_URL}/track/`);
	// const { data: playlists } = useFetch('http://localhost:4000/playlists');
	// const { data: albums } = useFetch('http://localhost:4000/albums');

	const latestPlayed = tracks?.slice(0, 5);

	return (
		<>
			<CardsContainer
				title='Recently played'
				playlists={latestPlayed}
				isPlayable
			/>
			{/* <CardsContainer title="Your favorite playlists" playlists={playlists} /> */}
			{/* <CardAlbumsContainer
        title="Recently albums"
        albums={albums.slice(0, 7)}
      /> */}
			<AlbumsView />
			<GenreView />
		</>
	);
};
