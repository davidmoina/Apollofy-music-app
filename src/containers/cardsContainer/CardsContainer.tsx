import React from 'react';
import { Card } from '../../components/Card/Card';
import styles from './cardsContainer.module.scss'

interface PlaylistRecommendationsContainerProps {
  title: string;
  playlists: Array<{ image: string; artist: string, song: string }>;
}

export const CardsContainer: React.FC<PlaylistRecommendationsContainerProps> = ({ title, playlists }) => {
  return (
    <section className={`mb-8 ${styles.cardsContainer}`}>
      <h2 className={`text-xl md:text-2xl mb-2 ml-2 ${styles.containerTitle}`}>{title}</h2>
      <div className="flex overflow-x-auto gap-6"> 
            {playlists.map((playlist, index) => (
              <Card key={index} {...playlist} />
            ))}
      </div>  
    </section>
  );
};