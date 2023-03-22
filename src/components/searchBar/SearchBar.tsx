import { ChangeEvent, FormEvent, useState } from 'react'
import { Tracks } from '../../interfaces';
import styles from '../user/input/input/input.module.scss'
import { tracks } from './../../data/traks'
import { MusicRow } from '../musicRow/MusicRow'

export const SearchBar = () => {
    const data = tracks;
    const [inputValue, setInputValue] = useState("");
    const [filteredSongs, setFilteredSongs] = useState<Tracks[] | []>([]);
    const handleSearch = (e: FormEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value);
        const results = data.filter(song => song.title.toLowerCase().includes(e.currentTarget.value.toLowerCase()));
        console.log(results);
        setFilteredSongs(results);

    }
    return (
        <div className={styles.containerSearch}>
            <div className={styles.inputWrapper}>
                <input
                    type="text"
                    id="searchBar"
                    className={styles.formInput}
                    placeholder="Search..."
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
                filteredSongs?.map((song, index) => (
                    <MusicRow key={song.id} position={index} thumbnail={song.thumbnail} artist={song.artist} title={song.title} />
                ))
            }</div>
        </div>


    );
}
