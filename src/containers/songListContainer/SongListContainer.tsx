import { MusicRow } from "../../components/musicRow/MusicRow";


export const SongListContainer = ({tracks}) => {

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
        />
      ))}
    </div>
  )
}
