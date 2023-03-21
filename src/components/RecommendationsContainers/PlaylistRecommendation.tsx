import {useState} from 'react';
import styles from './recommen.module.scss';
import { FC } from "react";

interface PlaylistRecommendationProps {
  image: string;
  artist: string;
  song: string;
}

export const PlaylistRecommendation: React.FC<PlaylistRecommendationProps> = ({ image, artist, song }) => {
  
  return (
    <div className="flex flex-col  w-40 sm:w-48 md:w-54 lg:w-72 xl:w-80 mx-2">
      <img
        src={image}
        alt={song}
        className="w-full object-cover rounded-lg"
        style={{ height: "100%", width: "100%" }}
      />
      <h3 className="mt-2 ml-2 left-align textSong">{song}</h3>
      <h5 className="ml-2 left-align textArtist">{artist}</h5>
    </div>
  );
};

export default PlaylistRecommendation;





