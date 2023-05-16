import { FormEvent, useState } from 'react';
import styles from '../user/input/input/input.module.scss';
import stylesTitle from '../../containers/cardsContainer/cardsContainer.module.scss';
import { Playlist, Track } from '../../interfaces/songs';
import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer';
import { CardAlbumsContainer } from '../../containers/cardsContainer/CardAlbumsContainer/CardAlbumsContainer';
import { AlbumCard } from '../Cards/CardAlbum';

export const SearchBar = () => {
	
	const [filteredSongs, setFilteredSongs] = useState<Track[]>([]);
	const [filteredAlbums, setFilteredAlbums] = useState<AlbumCard[]>([]);
	const [filteredPlaylists, setFilteredPlaylists] = useState<Playlist[]>([]);
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const handleSearch = async (e: FormEvent<HTMLInputElement>) => {

		const inputValue = e.currentTarget.value;

		if (inputValue.length > 1) {
			try{	
				const response = await fetch(`${VITE_APP_SERVICE_URL}/track/search`, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
						body: JSON.stringify({inputValue})
				})

				const {tracks, playlists, albums} = await response.json();
				setFilteredSongs(tracks);
				setFilteredPlaylists(playlists);
				setFilteredAlbums(albums);
				
			}catch (error) {
				console.log(error);
			}
			} else {
				setFilteredSongs([]);
				setFilteredPlaylists([]);
				setFilteredAlbums([]);
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
			{
				(filteredSongs.length > 0 || filteredPlaylists.length > 0 || filteredAlbums.length > 0) &&
				<>
					<div>
						<section className='ml-5'>
							<h2 className={`text-xl md:text-2xl mb-2 ${stylesTitle.containerTitle}`}>
								Tracks
							</h2>
								<SongListContainer tracks={filteredSongs} />
						</section>
					</div>
					<div>
						<CardsContainer
							title='Playlists'
							playlists={filteredPlaylists}
							isPlayable
						/>
					</div>
					<div>
						<CardAlbumsContainer
							title='Albums'
							albums={filteredAlbums}
							isPlayable
						/>
					</div>
				</>
			}
		</div>
	);
};
