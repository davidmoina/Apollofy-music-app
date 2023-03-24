import { MusicRow } from "../../components/musicRow/MusicRow"
import { tracks } from "../../data/traks"
import { useContext } from 'react';
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';


export const SongListContainer = () => {

  const {currentSong, setCurrent, togglePlaying } = useContext(PlayerContext);

  return (
    <div className='flex flex-col p-4 gap-4'>
      {tracks.map((song, index) => (
        <MusicRow currentSong={currentSong} togglePlaying={togglePlaying} setCurrent={setCurrent} key={song.id} position={index} thumbnail={song.thumbnail} artist={song.artist} title={song.title}/>
      ))}
    </div>
  )
}
