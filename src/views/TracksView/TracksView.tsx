import { useFetch } from '../../api/useFetch';
import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import { Track } from '../../interfaces/songs';

export const TracksView = () => {
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const { data: tracks } = useFetch<Track[]>(`${VITE_APP_SERVICE_URL}/track`);

	return (
		<div>
			<PlaylistHeader
				name='All the tracks'
				description='Get your mic on with this beats. You are going to sing all the way down'
				thumbnail='https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'
			/>
			<SongListContainer tracks={tracks} />
		</div>
	);
};
