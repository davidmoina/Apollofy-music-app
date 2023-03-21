import React from 'react';
import PlaylistRecommendation from './PlaylistRecommendation';
import styles from './recommend.module.scss';
import { FC } from "react";


interface PlaylistRecommendationsContainerProps {
  title: string;
  playlists: Array<{ image: string; artist: string, song: string }>;
}

export const PlaylistRecommendationsContainer: React.FC<PlaylistRecommendationsContainerProps> = ({ title, playlists }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl mb-2 ml-2">{title}</h2>
      <div className="flex overflow-x-auto gap-6"> 
            {playlists.map((playlist, index) => (
              <PlaylistRecommendation key={index} {...playlist} />
            ))}
      </div>  
    </section>
  );
};

export default PlaylistRecommendationsContainer;