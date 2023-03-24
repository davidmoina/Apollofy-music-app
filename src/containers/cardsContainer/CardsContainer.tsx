import React from 'react';
import { Card } from '../../components/Card/Card';
import { Playlist } from '../../interfaces/songs';
import styles from './cardsContainer.module.scss'

interface PlaylistRecommendationsContainerProps {
  title: string;
  playlists: Playlist[];
}



export const CardsContainer = ({ title, playlists }: PlaylistRecommendationsContainerProps) => {

  return (
    <section className={`mb-8 ${styles.cardsContainer}`}>
      <h2 className={`text-xl md:text-2xl mb-2 ml-2 ${styles.containerTitle}`}>{title}</h2>
      <div className={`flex overflow-x-auto gap-6 ${styles.containerCard}`}> 
            {playlists.map((playlist, index) => (
              <Card key={index} playlists={playlist} />
            ))}
      </div>  
    </section>
  );
};