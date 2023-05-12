import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import PlaylistHeader from '../../components/playlistHeader/PlaylistHeader';
import PlaylistInfoBar from '../../components/infoBarPlaylists/InfoBarPlaylists';
import { tracks } from '../../data/traks';

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
	return (
		<>
			<PlaylistHeader {...samplePlaylists} />
			<PlaylistInfoBar />
			<SongListContainer tracks={tracks} />
		</>
	);
};
