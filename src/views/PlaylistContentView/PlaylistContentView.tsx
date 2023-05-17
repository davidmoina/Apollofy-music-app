import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import PlaylistInfoBar from '../../components/InfoBarPlaylists/InfoBarPlaylists';
import { useFetch } from '../../api/useFetch';
import { useParams } from 'react-router-dom';
import { Playlist } from '../../interfaces/playlist';
import { Track } from '../../interfaces/songs';
import { useEffect } from 'react';

export const PlaylistContentView = () => {
	// const [infoData, setInfoData] = useState<Playlist<Track[]> | null>(null);

	const { id } = useParams();

	const { data, reload, setReload } = useFetch<Playlist<Track[]>>(
		`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${id}`
	);
	console.log(data);

	useEffect(() => {
		setReload(!reload);
	}, [id]);

	return (
		<>
			<PlaylistHeader
				name={data?.name}
				thumbnail={data?.thumbnail}
				description={data?.description}
				publicAccessible={data?.publicAccessible}
			/>
			<PlaylistInfoBar />
			<SongListContainer tracks={data?.tracks} />
		</>
	);
};
