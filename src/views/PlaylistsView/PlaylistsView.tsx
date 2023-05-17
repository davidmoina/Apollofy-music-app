import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import PlaylistInfoBar from '../../components/InfoBarPlaylists/InfoBarPlaylists';
import { useFetch } from '../../api/useFetch';
import { useParams } from 'react-router-dom';
import { Playlist } from '../../interfaces/playlist';
import { Track } from '../../interfaces/songs';

export const samplePlaylists = {
	id: 1,
	name: 'Road trip! All the masters I need!',
	isFollowed: true,
	thumbnail:
		'https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625060/tracks-thumbnails-dev/car_yx6ld1.jpg',
	description:
		'Get your mic on with this beats. You are going to sing all the way down',
	publicAccessible: true,
	primaryColor: '#fbdc00',
};

export const PlaylistsView = () => {
	const { id } = useParams();

	const { data } = useFetch<Playlist<Track[]>>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${id}`
	);
	console.log(data);

	return (
		<>
			<PlaylistHeader data={data} />
			<PlaylistInfoBar />
			<SongListContainer tracks={data?.tracks} />
		</>
	);
};
