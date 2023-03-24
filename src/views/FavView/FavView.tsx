import { ContextTypeFav, FavSongContext } from "../../context/favSongsContext/FavSongsContext"
import { useContext } from 'react';
import { MusicRow } from "../../components/musicRow/MusicRow";
import PlaylistInfoBar from "../../components/infoBarPlaylists/InfoBarPlaylists";
import PlaylistHeader from "../../components/playlistHeader/PlaylistHeader";
import { samplePlaylists } from "../PlaylistsView/PlaylistsView";

export const FavView = () => {

  const {favorite} = useContext(FavSongContext) as ContextTypeFav

  return (
    <>
      <PlaylistHeader {...samplePlaylists}/>
      <PlaylistInfoBar/>
      {
        favorite.map((song, index) => (     
          <MusicRow key={index} position={index} thumbnail={song.thumbnail} artist={song.artist} title={song.name} actualSong={song} />
        ))
      }
    </>
  )
}
