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
			<div className={`${styles.containerGenre}`}>
				<h1 className=''>Explore Genres</h1>
				<div className={`flex justify-center flex-wrap  ${styles.divGenre}`}>
					{genres.map(genre => (
						<button
							className={`py-10 text-sm sm:text-lg lg:text-2xl w-28 sm:w-32 sm:h-32 lg:w-48 lg:h-48 hover:underline hover:scale-105 hover:opacity-90 transition-allxº`}
							key={genre.name}
							onClick={() => navigate(`/genre/${genre._id}`)}
							style={{
								backgroundColor: genre.color,
								color: 'white',
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
