import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Track } from '../../interfaces/songs';
import { useTrack } from '../../hooks/useTrack';
import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';

export const ArtistContentView = () => {
	const { getTrackByArtist } = useTrack();
	const [tracks, setTracks] = useState<Track[]>([]);
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		(async () => {
			try {
				const userTracks = await getTrackByArtist(id);

				setTracks(userTracks);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [id]);

	return (
		<div>
			<SongListContainer tracks={tracks} />
		</div>
	);
};
