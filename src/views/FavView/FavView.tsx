import {
	ContextTypeFav,
	FavSongContext,
} from '../../context/favSongsContext/FavSongsContext';
import { useContext} from 'react';
import PlaylistInfoBar from '../../components/infoBarPlaylists/InfoBarPlaylists';
import PlaylistHeader from '../../components/playlistHeader/PlaylistHeader';
import { SongListContainer } from '../../containers/songListContainer/SongListContainer';

export const FavView = () => {

	const { data } = useContext(FavSongContext) as ContextTypeFav;

	const samplePlaylists = {
		id: 1,
		name: 'Your favorite songs',
		isFollowed: true,
		thumbnail:
			'https://cdn.discordapp.com/attachments/1030785013798666240/1089833477962207272/liked-songs-300.png',
		description: 'These are the tracks you liked',
		publicAccessible: true,
		primaryColor: '#fbdc00',
	};

	return (
		<>
			<PlaylistHeader {...samplePlaylists} />
			<PlaylistInfoBar />
			{
				data ? 
				<SongListContainer tracks={data}/>
				:
				<h1 className='text-center text-xl text-white'>You have no favorite songs</h1>
			}
		</>
	);
};
