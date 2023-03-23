import { useFetch } from '../../api/useFetch';
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer'
import { useEffect } from 'react';

const samplePlaylists = [
  { image: 'src/assets/images/rock.jpeg', artist: 'Rock', song: "In da Club" },
  { image: 'src/assets/images/blues.jpeg', artist: 'Blues', song: "Wonderwall"  },
  { image: 'src/assets/images/hip-hop.jpeg', artist: 'Hip Hop', song: "Ver good understood"  },
  { image: 'src/assets/images/electronic.jpeg', artist: 'Electronic', song: "In da Club"}, 
  { image: 'src/assets/images/classical.jpg', artist: 'Classical', song: "In da Club" }
];

export const HomeView = () => {

  const { data: playlists } = useFetch("http://localhost:4000/playlists")

  useEffect(() => {
    console.log('HomeView rendered');
  }, []);
  

  return (
    <>
      <CardsContainer title='Recently played' playlists={playlists}/>
      {/* <CardsContainer title='Mixes for you' playlists={samplePlaylists}/> */}
      {/* <CardsContainer title='Radio stations' playlists={samplePlaylists}/> */}
    </>
    
  )
}
