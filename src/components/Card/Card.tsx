import styles from './card.module.scss';

interface PlaylistRecommendationProps {
  image: string;
  artist: string;
  song: string;
}

export const Card: React.FC<PlaylistRecommendationProps> = ({ image, artist, song }) => {
  
  return (
    <div className= {`flex flex-col w-28 md:w-32 lg:w-48 transition-all duration-200 ${styles.card}`}>
      <img
        src={image}
        alt={song}
        className={`shadow-lg rounded-lg ${styles.songCover}`}
      />
      <h3 className={styles.songTitle}>{song}</h3>
      <h5 className={styles.songArtist}>{artist}</h5>
    </div>
  );
};





