import { useContext } from 'react';
import { useFetch } from '../../api/useFetch';
import { PlaylistAlbumRow } from '../../components/PlaylistAlbumRow/PlaylistAlbumRow';
import { FavSongContext } from '../../context/FavSongsContext/FavSongsContext';
import { Playlist } from '../../interfaces/playlist';
import { User } from '../../interfaces/user';

export const MobileLibraryView = () => {
	const { data } = useContext(FavSongContext);

	const user = JSON.parse(localStorage.getItem('User')!);

	const { data: playlists } = useFetch<Playlist<User>[]>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/all/${user.id}`
	);

	return (
		<div>
			<h1 className='text-xl font-bold mb-5 ml-4 text-gray-300'>
				Your library
			</h1>
			<PlaylistAlbumRow
				img='https://cdn.discordapp.com/attachments/1030785013798666240/1089833477962207272/liked-songs-300.png'
				name='Your liked songs'
				songs={data.length}
				user='Auto generated'
				type='Playlist'
				path='/fav'
			/>
			{playlists?.map(({ _id, thumbnail, name, userId, tracks }) => (
				<PlaylistAlbumRow
					img={thumbnail}
					name={name}
					songs={tracks.length}
					user={userId.firstName}
					type='Playlist'
					path={`/playlist/${_id}`}
				/>
			))}
		</div>
	);
};
