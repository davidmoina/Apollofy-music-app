import { useEffect } from 'react';
import { useFetch } from '../../api/useFetch';
import { CardsContainer } from '../../containers/cardsContainer/CardsContainer'
import { CardAlbumsContainer } from '../../containers/cardsContainer/CardAlbumsContainer';

export const HomeView = () => {

  const { data: playlists } = useFetch("http://localhost:4000/playlists")
  const { data: albums } = useFetch("http://localhost:4000/albums");

  useEffect(() => {
    console.log('HomeView rendered');
  }, []);
  

  return (
    <>
      <CardsContainer title='Recently played' playlists={playlists}/>
      <CardAlbumsContainer title='Recently albums' albums={ albums } />
      {/* <CardsContainer title='Mixes for you' playlists={samplePlaylists}/> */}
      {/* <CardsContainer title='Radio stations' playlists={samplePlaylists}/> */}
    </>
    
  )
}
