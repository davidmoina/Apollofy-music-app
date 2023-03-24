import React, { useState, FC } from 'react'
import { ToastContainer } from 'react-toastify'
import { AuthProvider } from './context/authContext/AuthProvider'
import { Routing } from './routes/Routing.routes'
import 'react-toastify/dist/ReactToastify.css';
import './sass/index.scss';
import { FavSongProvider } from './context/favSongsContext/FavSongsProvider';
import { PlayerProvider } from './context/PlayerContext/PlayerProvider';


const App: FC = () => {
  return (
    <AuthProvider>
        <PlayerProvider>
      <FavSongProvider>
        <ToastContainer
          theme="dark"
          position="top-center" 
          autoClose={2000}
          hideProgressBar={true} />
          <Routing/>
      </FavSongProvider>
      </PlayerProvider>
    </AuthProvider>
  )
}

export default App
