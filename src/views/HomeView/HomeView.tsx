import React from 'react'
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer'

const samplePlaylists = [
  { image: 'src/assets/images/rock.jpeg', artist: 'Rock', song: "In da Club" },
  { image: 'src/assets/images/blues.jpeg', artist: 'Blues', song: "Wonderwall"  },
  { image: 'src/assets/images/hip-hop.jpeg', artist: 'Hip Hop', song: "Ver good understood"  },
  { image: 'src/assets/images/electronic.jpeg', artist: 'Electronic', song: "In da Club"}, 
  { image: 'src/assets/images/classical.jpg', artist: 'Classical', song: "In da Club" }
];


export const HomeView = () => {
  return (
    <>
      <CardsContainer title='Recently played' playlists={samplePlaylists}/>
      <CardsContainer title='Mixes for you' playlists={samplePlaylists}/>
      <CardsContainer title='Radio stations' playlists={samplePlaylists}/>
    </>
    
  )
}
