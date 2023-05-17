import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';
import { useFetch } from '../../api/useFetch';
import { useParams } from 'react-router-dom';
import { Playlist } from '../../interfaces/playlist';
import { useEffect } from 'react';
import { PlaylistMenuSection } from '../../components/PlaylistMenuSection/PlaylistMenuSection';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import PlaylistInfoBar from '../../components/InfoBarPlaylists/InfoBarPlaylists';

export const PlaylistContentView = () => {
	const { id } = useParams();

	const { data, reload, setReload } = useFetch<Playlist<string>>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${id}`
	);
	console.log(data);

	useEffect(() => {
		reloadData();
	}, [id]);

	const reloadData = () => {
		setReload(!reload);
	};

	return (
		<>
			<PlaylistHeader
				name={data?.name}
				thumbnail={data?.thumbnail}
				description={data?.description}
				publicAccessible={data?.publicAccessible}
			/>
			<PlaylistMenuSection
				reload={reload}
				setReload={setReload}
				id={data?._id}
				tracks={data?.tracks}
			/>
			<PlaylistInfoBar isPlaylist={true} />
			<SongListContainer
				tracks={data?.tracks}
				isPlaylist={true}
				reloadData={reloadData}
			/>
		</>
	);
};
