import { useFetch } from '../../api/useFetch';
import { Playlist } from '../../interfaces/playlist';
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer';

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
	const user = JSON.parse(localStorage.getItem('User')!);

	const { data } = useFetch<Playlist<string>[]>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/all/${user.id}`
	);
	console.log(data);

	return (
		<>
			<CardsContainer title='All your playlists' playlists={data} />
		</>
	);
};
