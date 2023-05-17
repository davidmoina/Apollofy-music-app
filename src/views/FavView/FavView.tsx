import {
	ContextTypeFav,
	FavSongContext,
} from '../../context/favSongsContext/FavSongsContext';
import { useContext } from 'react';
import PlaylistInfoBar from '../../components/InfoBarPlaylists/InfoBarPlaylists';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import { SongListContainer } from '../../containers/songListContainer/SongListContainer';

export const FavView = () => {
	const { data } = useContext(FavSongContext) as ContextTypeFav;

	const samplePlaylists = {
		_id: '1',
		name: 'Your favorite songs',
		collaborative: false,
		description: 'These are the tracks you liked',
		primaryColor: '#fbdc00',
		cover: 'gdgdfg',
		thumbnail:
			'https://cdn.discordapp.com/attachments/1030785013798666240/1089833477962207272/liked-songs-300.png',
		publicAccessible: true,
		numberSongs: 1,
		followers: 1,
		rating: 1,
		userId: 'werwerwer',
		followedBy: [],
		tracks: data,
	};

	return (
		<>
			<PlaylistHeader data={samplePlaylists} />
			<PlaylistInfoBar />
			{data ? (
				<SongListContainer tracks={data} />
			) : (
				<h1 className='text-center text-xl text-white'>
					You have no favorite songs
				</h1>
			)}
		</>
	);
};
