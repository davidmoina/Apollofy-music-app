import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGenre } from '../../hooks/useGenre';
import styles from './GenreView.module.scss';

interface Genre {
	_id: string;
	name: string;
	color: string;
	image: string;
}

export const GenreView = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const { getAllGenres } = useGenre();
	const navigate = useNavigate();

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const genresData = await getAllGenres();
				setGenres(genresData);
			} catch (error) {
				console.log(error);
			}
		};

		fetchGenres();
	}, []);

	return (
		<div>
			<div className={` ${styles.containerGenre}`}>
				<h1>Explore Genres</h1>
				<div className={`flex justify-center flex-wrap ${styles.divGenre}`}>
					{genres.map(genre => (
						<button
							key={genre.name}
							onClick={() => navigate(`/genre/${genre._id}`)}
							style={{
								backgroundColor: genre.color,
								color: 'white',
								border: `4px solid ${genre.color}`,
								backdropFilter: 'blur(2px)',
							}}
						>
							{genre.name}
							<br />
						</button>
					))}
				</div>
			</div>
		</div>
	);
};
