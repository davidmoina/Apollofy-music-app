import { SongListContainer } from '../../containers/SongListContainer/SongListContainer';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useGenre } from '../../hooks/useGenre';
import PlaylistHeader from '../../components/PlaylistHeader/PlaylistHeader';
import PlaylistInfoBar from '../../components/InfoBarPlaylists/InfoBarPlaylists';
import style from '../LibraryView/libraryView.module.scss';

interface Genre {
	_id: string;
	name: string;
	color: string;
	image: string;
}

export const GenreContentView = () => {
	const { getTracksByGenre, getAllGenres } = useGenre();
	const { id } = useParams();

	const [genres, setGenres] = useState<Genre[] | any>([]);
	const [genreName, setGenreName] = useState<string>('Genre');
	const [backgroundImage, setBackgroundImage] = useState<string>('');

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const genresData = await getTracksByGenre(id);
				setGenres(genresData);

				const allGenres = await getAllGenres();
				const genre = allGenres.find((genre: Genre) => genre._id === id);
				setGenreName(genre.name);
				setBackgroundImage(genre.image);
			} catch (error) {
				console.log(error);
			}
		};

		fetchGenres();
	}, []);

	console.log(genreName);
	return (
		<>
			<div
				style={{
					backgroundImage: `url(${backgroundImage})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPositionY: 'center',
					height: '45vh',
					marginBottom: '2rem',
					marginTop: '-5.2rem',
				}}
			>
				<div className={style.headerNoImage} style={{ paddingTop: '5rem' }}>
					<PlaylistHeader name={genreName} />
				</div>
			</div>
			<PlaylistInfoBar />
			<SongListContainer tracks={genres} />
		</>
	);
};
