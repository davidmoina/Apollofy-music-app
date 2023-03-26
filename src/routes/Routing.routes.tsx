import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes'
import { Home } from '../pages/Home/Home'
import { LoginPage } from '../pages/LoginPage/LoginPage'
import { RegisterPage } from '../pages/RegisterPage/RegisterPage'
import { HomeView } from '../views/HomeView/HomeView'
import { LibraryView } from '../views/LibraryView/LibraryView'
import SearchView from '../views/SearchView/SearchView'
import { PlaylistsView } from '../views/PlaylistsView/PlaylistsView';
import { AlbumsView } from '../views/AlbumsView/AlbumsView';
import { TracksView } from '../views/TracksView/TracksView';
import { ArtistsView } from '../views/ArtistsView/ArtistsView';
import { RecoverPassWithEmailPage } from '../pages/RecoverPassWithEmailPage/RecoverPassWithEmailPage';
import { RecoverPassPage } from '../pages/RecoverPassPage/RecoverPassPage'
import { EditProfile } from '../pages/editProf/EditProfile'

export const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />}>
            <Route index element={<HomeView />} />
            <Route path='search' element={<SearchView />} />
            <Route path='library' element={<LibraryView />} />
            <Route path='playlists' element={<PlaylistsView />} />
            <Route path='albums' element={<AlbumsView />} />
            <Route path='tracks' element={<TracksView />} />
            <Route path='artists' element={<ArtistsView />} />
            <Route path='edit-profile' element={<EditProfile />} />

          </Route>
        </Route>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/recovery-email' element={<RecoverPassWithEmailPage />} />
        <Route path='/recovery-pass' element={<RecoverPassPage />} />
        <Route path='/register' element={<RegisterPage />} />

      </Routes>
    </BrowserRouter>
  )
}
