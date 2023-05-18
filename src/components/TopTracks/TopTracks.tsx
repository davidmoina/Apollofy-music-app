import React from 'react';
import styles from './TopTracks.module.scss';


interface Song {
  _id: string;
  trackId: string;
  name: string;
  artists: { id: string; name: string; _id: string }[];
  thumbnail: string;
  playCount: number;
  totalMinutesPlayed: number;
}

interface Props {
  songs: Song[];
}

const TopTracks: React.FC<Props> = ({ songs }) => (
  <div>
    {songs.map((song) => (
      <div className={styles.rowContainer} key={song._id}>
        <img src={song.thumbnail} alt={song.name} className={styles.thumbnail} />
        <span className={styles.songName}>{song.name}</span>
        <span className={styles.artistName}>
          {song.artists.map((artist) => artist.name).join(", ")}
        </span>
        <span className={styles.playCount}>{song.playCount}</span>
        <span className={styles.totalMinutesPlayed}>{Math.floor(song.totalMinutesPlayed)}</span>
      </div>
    ))}
  </div>
);



export default TopTracks;



