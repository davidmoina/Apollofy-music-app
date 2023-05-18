import React from 'react';
import styles from './TopGenres.module.scss';

interface Genre {
  totalPlays: number;
  genre: string;
  totalDuration: number;
}

interface Props {
  genres: Genre[];
}

const TopGenres: React.FC<Props> = ({ genres }) => (
  <div>
    {genres.map((genre, index) => (
      <div className={styles.rowContainer} key={index}>
        <span className={styles.genre}>{genre.genre}</span>
        <span className={styles.totalPlays}>{genre.totalPlays}</span>
        <span className={styles.totalDuration}>{Math.floor(genre.totalDuration)}</span>
      </div>
    ))}
  </div>
);

export default TopGenres;





