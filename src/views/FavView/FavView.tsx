import { ContextTypeFav, FavSongContext } from "../../context/favSongsContext/FavSongsContext"
import { useContext } from 'react';
import { MusicRow } from "../../components/musicRow/MusicRow";

export const FavView = () => {

  const {favorite} = useContext(FavSongContext) as ContextTypeFav

  console.log(favorite)

  return (
    <>
      <div 
      className="text-5xl text-white"
      >
        YOUR FAV SONGS:
      
      </div>
      {
        favorite.map((song, index) => (     
          <MusicRow key={index} position={index} thumbnail={song.thumbnail} artist={song.artist} title={song.name} actualSong={song} />
        ))

      }
    </>
  )
}
