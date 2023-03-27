import { useEffect } from 'react';
import { useFetch } from '../../api/useFetch';
import { CardAlbumsContainer } from '../../containers/cardsContainer/CardAlbumsContainer/CardAlbumsContainer';


export const AlbumsView = () => {
  const { data: albums } = useFetch("http://localhost:4000/albums");

  useEffect(() => {
    console.log('HomeView rendered');
  }, []);

  return (
    <div>
      <CardAlbumsContainer title='All albums' albums={ albums } />
    </div>
  )
}
