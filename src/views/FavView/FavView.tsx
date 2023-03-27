import { ContextTypeFav, FavSongContext } from "../../context/favSongsContext/FavSongsContext"
import { useContext } from 'react';
import { MusicRow } from "../../components/musicRow/MusicRow";
import PlaylistInfoBar from "../../components/infoBarPlaylists/InfoBarPlaylists";
import PlaylistHeader from "../../components/playlistHeader/PlaylistHeader";

export const FavView = () => {

  const {favorite} = useContext(FavSongContext) as ContextTypeFav

  const samplePlaylists = 
  {
    "id": 1,
    "name": "Your favorite songs",
    "isFollowed": true,
    "thumbnail": "https://cdn.discordapp.com/attachments/1030785013798666240/1089833477962207272/liked-songs-300.png",
    "description": "These are the tracks you liked",
    "publicAccessible": true,
    "primaryColor": "#fbdc00"
  }
  
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
