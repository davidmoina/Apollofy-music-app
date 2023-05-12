//import { useEffect } from 'react';
import { useFetch } from '../../api/useFetch';
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer';
//import { CardAlbumsContainer } from '../../containers/cardsContainer/CardAlbumsContainer/CardAlbumsContainer';

export const HomeView = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const { data: tracks } = useFetch(`${VITE_APP_SERVICE_URL}/track/`);
	//const { data: playlists } = useFetch('http://localhost:4000/playlists');
	//const { data: albums } = useFetch('http://localhost:4000/albums');

	const latestPlayed = tracks.slice(0, 5);

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
		</>
	);
};
