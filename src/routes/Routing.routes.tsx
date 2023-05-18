import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from '../components/ProtectedRoutes/ProtectedRoutes';
import { Home } from '../pages/Home/Home';
import { LoginPage } from '../pages/LoginPage/LoginPage';
import { RegisterPage } from '../pages/RegisterPage/RegisterPage';
import { HomeView } from '../views/HomeView/HomeView';
import { LibraryView } from '../views/LibraryView/LibraryView';
import SearchView from '../views/SearchView/SearchView';
import { PlaylistsView } from '../views/PlaylistsView/PlaylistsView';
import { AlbumsView } from '../views/AlbumsView/AlbumsView';
import { TracksView } from '../views/TracksView/TracksView';
import { ArtistsView } from '../views/ArtistsView/ArtistsView';
import { RecoverPassPage } from '../pages/RecoverPassPage/RecoverPassPage';
import { FavView } from '../views/FavView/FavView';
import { EditProfile } from '../views/EditProf/Editprofile';
import { ChangePassView } from '../views/ChangePassView/ChangePassView';
import { ForgotPassword } from '../pages/ForgotPassword/ForgotPassword';
import { ResetPass } from '../pages/ResetPass/ResetPass';
import { GenreView } from '../views/GenreView/GenreView';
import { PlaylistContentView } from '../views/PlaylistContentView/PlaylistContentView';
import { GenreContentView } from '../views/GenreContentView/GenreContentView';
import { ArtistContentView } from '../views/ArtistContentView/ArtistContentView';
import { StatisticsView } from '../views/StatisticsView/StatisticsView';
import { WelcomePage } from '../pages/WelcomePage/WelcomePage';
import { AlbumContentView } from '../views/AlbumContentView/AlbumContentView';
import { PublicRoutes } from '../components/PublicRoutes/PublicRoutes';
import { MobileLibraryView } from '../views/MobileLibraryView/MobileLibraryView';

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
						<Route path='playlist/:id' element={<PlaylistContentView />} />
						<Route path='albums' element={<AlbumsView />} />
						<Route path='albums/:id' element={<AlbumContentView />} />
						<Route path='tracks' element={<TracksView />} />
						<Route path='users' element={<ArtistsView />} />
						<Route path='users/:id' element={<ArtistContentView />} />
						<Route path='genre' element={<GenreView />} />
						<Route path='statistics' element={<StatisticsView />} />
						<Route path='genre/:id' element={<GenreContentView />} />
						<Route path='fav' element={<FavView />} />
						<Route path='edit-profile' element={<EditProfile />} />
						<Route path='change-password' element={<ChangePassView />} />
						<Route path='library-mobile' element={<MobileLibraryView />} />
					</Route>
				</Route>
				<Route element={<PublicRoutes />}>
					<Route path='/welcome' element={<WelcomePage />} />
					<Route path='/login' element={<LoginPage />} />
					<Route path='/recovery-pass' element={<RecoverPassPage />} />
					<Route path='/forgot-pass' element={<ForgotPassword />} />
					<Route path='/register' element={<RegisterPage />} />
					<Route path='/reset/:id/:resetString' element={<ResetPass />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
