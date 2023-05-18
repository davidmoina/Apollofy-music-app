import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Track } from '../../interfaces/songs';
import { useTrack } from '../../hooks/useTrack';
import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';
import useUserAuth from '../../hooks/useUserAuth';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import style from '../LibraryView/libraryView.module.scss';

interface Artist {
	firstName: string;
	thumbnail: string;
	_id: string;
}

export const ArtistContentView = () => {
	const { getTrackByArtist } = useTrack();
	const { useGetUser } = useUserAuth();
	const [tracks, setTracks] = useState<Track[]>([]);
	const [artistName, setArtistName] = useState<Artist['firstName']>('');
	const { id } = useParams();

	useEffect(() => {
		(async () => {
			try {
				const userTracks = await getTrackByArtist(id);
				setTracks(userTracks);
				const userData = await useGetUser(id);
				setArtistName(userData.firstName);
			} catch (error) {
				console.log(error);
			}
		})();
	}, [id]);

	return (
		<>
			<div className={style.headerNoImage} style={{ paddingTop: '5rem' }}>
				<PlaylistHeader name={artistName} />
			</div>
			<div>
				<SongListContainer tracks={tracks} />
			</div>
		</>
	);
};
