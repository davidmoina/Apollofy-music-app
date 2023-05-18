import { useFetch } from '../../api/useFetch';
import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import { Album } from '../../interfaces/songs';
import { useLocation } from 'react-router-dom';

export const AlbumContentView = () => {

	const location = useLocation()
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const { data } = useFetch<Album>(`${VITE_APP_SERVICE_URL}/album/${location.pathname.replace('/albums/', '')}`);

	return (
		<div>
			<PlaylistHeader
				name={data?.title}
				description={data?.year.slice(0,4)}
				thumbnail={data?.thumbnail}
				publicAccessible={true}
			/>

			{data ? <SongListContainer tracks={data?.tracks} /> : null }
		</div>
	);
};
