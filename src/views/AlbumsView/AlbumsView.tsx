import { useFetch } from '../../api/useFetch';
import { CardAlbumsContainer } from '../../containers/CardsContainer/CardAlbumsContainer/CardAlbumsContainer';
import { AlbumCard } from '../../components/Cards/CardAlbum';

export const AlbumsView = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const { data: albums } = useFetch<AlbumCard[]>(
		`${VITE_APP_SERVICE_URL}/album`
	);

	return (
		<div>
			<CardAlbumsContainer title='All albums' albums={albums} isPlayable />
		</div>
	);
};
