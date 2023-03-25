import { MusicRow } from "../../components/musicRow/MusicRow"
import { tracks } from "../../data/traks"


export const SongListContainer = () => {
  return (
    <div className='flex flex-col p-4 gap-3'>
      {tracks.map((song, index) => (
        <MusicRow key={song.id} position={index} thumbnail={song.thumbnail} artist={song.artist} title={song.title}/>
      ))}
    </div>
  )
}
