import React from 'react';
import PlaylistRecommendation from './PlaylistRecommendation';
import style from './recommen.module.scss';
import { FC } from "react";


interface PlaylistRecommendationsContainerProps {
  title: string;
  playlists: Array<{ image: string; artist: string, song: string }>;
}

export const PlaylistRecommendationsContainer: React.FC<PlaylistRecommendationsContainerProps> = ({ title, playlists }) => {
  return (
    <div className="mb-8">
      <h2 className="text-xl mb-2 ml-2">{title}</h2>
      <div className="flex overflow-x-auto">
        <div className="flex">
            {playlists.map((playlist, index) => (
              <PlaylistRecommendation key={index} {...playlist} />
            ))}
        </div>
      </div>  
    </div>
  );
};

export default PlaylistRecommendationsContainer;