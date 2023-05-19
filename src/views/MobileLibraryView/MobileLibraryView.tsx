import { useContext } from 'react';
// import { useFetch } from '../../api/useFetch';
import { PlaylistAlbumRow } from '../../components/PlaylistAlbumRow/PlaylistAlbumRow';
import { FavSongContext } from '../../context/FavSongsContext/FavSongsContext';
import { Playlist } from '../../interfaces/playlist';
import { User } from '../../interfaces/user';
import { IoMdAdd } from 'react-icons/io';

interface Props {
	openModal: () => void;
	playlists: Playlist<User>[] | null;
}

export const MobileLibraryView = ({ openModal, playlists }: Props) => {
	const { data } = useContext(FavSongContext);

	// const user = JSON.parse(localStorage.getItem('User')!);

	// const { data: playlists } = useFetch<Playlist<User>[]>(
	// 	`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/all/${user.id}`
	// );

	return (
		<section>
			<div className='flex justify-between items-center mt-3 mb-3 mx-4'>
				<h1 className='text-xl font-bold text-gray-300'>Your library</h1>
				<button
					onClick={openModal}
					type='button'
					className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30'
				>
					<IoMdAdd style={{ display: 'inline-block', marginRight: '5px' }} />
					New playlist
				</button>
			</div>

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
					key={_id}
					img={thumbnail}
					name={name}
					songs={tracks.length}
					user={userId.firstName}
					type='Playlist'
					path={`/playlist/${_id}`}
				/>
			))}
		</section>
	);
};
