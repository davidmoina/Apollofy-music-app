import { FormEvent, useState } from 'react'
import styles from '../user/input/input/input.module.scss'
import { tracks, TracksType } from './../../data/traks'
import { MusicRow } from '../musicRow/MusicRow'

export const SearchBar = () => {
    const data = tracks;
    const [inputValue, setInputValue] = useState("");
    const [filteredSongs, setFilteredSongs] = useState<TracksType[]>([]);
    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);

        if(inputValue.length > 2) {
            const results = data.filter(song => song.title.toLowerCase().includes(inputValue.toLowerCase()));
            setFilteredSongs(results);
        } else {
            setFilteredSongs([])
        }
    }

    return (
        <div className={styles.containerSearch}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    id="searchBar"
                    className={styles.formInput}
                    placeholder="Search"
                    onChange={handleSearch}
                />
                <label
                    htmlFor="searchBar"
                    className={styles.formLabel}
                >
                    Search...
                </label>
            </div>

            <div>{
                filteredSongs.map((song, index) => (
                    <MusicRow key={song.id} position={index} thumbnail={song.thumbnail} artist={song.artist} title={song.title} />
                ))
            }</div>
        </div>


    );
}
