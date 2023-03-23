import styles from './card.module.scss';
import { Playlist } from '../../interfaces/songs';

interface PlaylistRecommendationProps {
  key: number,
  playlists: Playlist
}

export const Card = ({ playlists: {thumbnail, description, name}}: PlaylistRecommendationProps) => {
  
  return (
    <div className= {`flex flex-col w-28 md:w-32 lg:w-48 transition-all duration-200 ${styles.card}`}>
      <img
        src={thumbnail}
        alt={description}
        className={`shadow-lg rounded-lg ${styles.songCover}`}
      />
      <h3 className={styles.songTitle}>{name}</h3>
      <h5 className={styles.songArtist}>{name}</h5>
    </div>
  );
};





