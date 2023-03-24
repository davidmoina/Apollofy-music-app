import { MusicRow } from "../../components/musicRow/MusicRow"
import { useFetch } from '../../api/useFetch';import { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';


export const SongListContainer = ({tracks, currentSong, setCurrent, togglePlaying, songsSet}) => {

  return (
    <div className='flex flex-col p-4 gap-4'>
      {tracks.map((song, index) => (
        <MusicRow 
          key={song.id} 
          position={index} 
          thumbnail={song.thumbnail} 
          artist={song.artist} 
          title={song.name}
          actualSong={song}
          currentSong={currentSong} 
          setCurrent={setCurrent}
          togglePlaying={togglePlaying}
          songsSet={songsSet}
        />
      ))}
    </div>
  )
}
