import { useGenre } from '../../hooks/useGenre';
import { useState, useEffect } from 'react';

interface Genre {
	id: number;
	name: string;
	color: string;
}

export const GenreView = () => {
	const [genres, setGenres] = useState<Genre[]>([]);
	const { getAllGenres } = useGenre();

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
			<div>
				<h1>Genres:</h1>
				{genres.length > 0 ? (
					<div>
						{genres.map(genre => (
							<button>{genre.name}</button>
						))}
					</div>
				) : (
					<p>No genres available.</p>
				)}
			</div>
		</div>
	);
};
