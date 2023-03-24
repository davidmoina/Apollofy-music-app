import { useFetch } from '../../api/useFetch';
import { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';
import { SongListContainer } from '../../containers/songListContainer/SongListContainer';
import PlaylistHeader from '../../components/playlistHeader/PlaylistHeader';

const samplePlaylists = 
{
  "id": 1,
  "name": "All the tracks",
  "isFollowed": true,
  "thumbnail": "https://res.cloudinary.com/dmkdsujzh/image/upload/v1644625060/tracks-thumbnails-dev/car_yx6ld1.jpg",
  "description": "Get your mic on with this beats. You are going to sing all the way down",
  "publicAccessible": true,
  "primaryColor": "#fbdc00"
}

export const TracksView = () => {

  const {data} = useFetch('http://localhost:4000/tracks');

  const {currentSong, setCurrent, togglePlaying, songsSet } = useContext(PlayerContext);

  return (
    <div>
      <PlaylistHeader {...samplePlaylists}/>
      <SongListContainer tracks={data} currentSong={currentSong} setCurrent={setCurrent} togglePlaying={togglePlaying} songsSet={songsSet}/>
    </div>
  )
}
