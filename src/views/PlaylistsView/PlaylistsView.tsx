import React from 'react'
import { MusicRow } from '../../components/musicRow/MusicRow'
import { SongListContainer } from '../../containers/songListContainer/SongListContainer';

export const PlaylistsView = () => {
  return (
    <div>
      Playlists view
      <SongListContainer/>
    </div>
  )
}
