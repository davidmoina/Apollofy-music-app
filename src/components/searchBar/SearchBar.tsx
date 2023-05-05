import { FormEvent, useState } from 'react';
import styles from '../user/input/input/input.module.scss';
import { MusicRow } from '../musicRow/MusicRow';
import { useFetch } from '../../api/useFetch';
import { Track } from '../../interfaces/songs';

export const SearchBar = () => {
	const { data } = useFetch('http://localhost:4000/track');

	const [inputValue, setInputValue] = useState('');
	const [filteredSongs, setFilteredSongs] = useState<Track[]>([]);
	const handleSearch = (e: FormEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value);

		if (inputValue.length > 2) {
			const results = data.filter(song =>
				song.name.toLowerCase().includes(inputValue.toLowerCase())
			);
			setFilteredSongs(results);
		} else {
			setFilteredSongs([]);
		}
	};

	return (
		<div className={styles.containerSearch}>
			<div className={styles.inputWrapper}>
				<input
					type='text'
					id='searchBar'
					className={styles.formInput}
					placeholder='Search'
					onChange={handleSearch}
				/>
				<label htmlFor='searchBar' className={styles.formLabel}>
					Search...
				</label>
			</div>

			<div>
				{filteredSongs.map((song, index) => (
					<MusicRow
						actualSong={song}
						key={song.id}
						thumbnail={song.thumbnail}
						artist={song.artist}
						title={song.name}
					/>
				))}
			</div>
		</div>
	);
};
