import { MusicRow } from "../../components/musicRow/MusicRow"
import { useFetch } from '../../api/useFetch';

export const SongListContainer = () => {
   
  const {data : tracks} = useFetch('http://localhost:4000/tracks')

  console.log(tracks[0])

  return (
    <div className='flex flex-col p-4 gap-3'>
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
