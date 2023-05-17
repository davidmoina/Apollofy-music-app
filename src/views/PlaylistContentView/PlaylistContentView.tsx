import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import PlaylistHeader from '../../components/playlistHeader/PlaylistHeader';
import PlaylistInfoBar from '../../components/infoBarPlaylists/InfoBarPlaylists';
import { useFetch } from '../../api/useFetch';
import { useParams } from 'react-router-dom';
import { Playlist } from '../../interfaces/playlist';
import { useEffect } from 'react';
import { PlaylistMenuSection } from '../../components/PlaylistMenuSection/PlaylistMenuSection';

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
			<PlaylistHeader data={data} />
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
