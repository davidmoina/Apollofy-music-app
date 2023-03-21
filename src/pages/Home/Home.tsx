import React from 'react'
import { PlaylistRecommendation } from '../../components/RecommendationsContainers/PlaylistRecommendation';
import { PlaylistRecommendationsContainer }  from '../../components/RecommendationsContainers/PlaylistRecommendationsContainer';
import { MobileNavBar } from '../../components/MobileNavBar/MobileNavBar'
import style from "../sass/index.scss";

import { useState } from 'react'

const samplePlaylists = [
  { image: 'src/assets/images/rock.jpeg', artist: 'Rock', song: "In da Club" },
  { image: 'src/assets/images/blues.jpeg', artist: 'Blues', song: "Wonderwall"  },
  { image: 'src/assets/images/hip-hop.jpeg', artist: 'Hip Hop', song: "Ver good understood"  },
  { image: 'src/assets/images/electronic.jpeg', artist: 'Electronic', song: "In da Club"}, 
  { image: 'src/assets/images/classical.jpg', artist: 'Classical', song: "In da Club" }
];

export const Home = () => {
  return (
    <div>
      <h1>Home page</h1>
      <PlaylistRecommendationsContainer title="Categories" playlists={samplePlaylists} />
      <MobileNavBar/>
      
    </div>
  )
}
