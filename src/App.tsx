import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { AuthProvider } from './context/AuthContext/AuthProvider';
import { Routing } from './routes/Routing.routes';
import 'react-toastify/dist/ReactToastify.css';
import './sass/index.scss';
import { FavSongProvider } from './context/FavSongsContext/FavSongsProvider';
import { PlayerProvider } from './context/PlayerContext/PlayerProvider';
import { Toaster } from 'react-hot-toast';

const App: FC = () => {
	return (
		<AuthProvider>
			<PlayerProvider>
				<FavSongProvider>
					<Toaster
						toastOptions={{
							style: {
								borderRadius: '10px',
								background: '#333',
								color: '#fff',
							},
						}}
					/>
					<ToastContainer
						theme='dark'
						position='top-center'
						autoClose={2000}
						hideProgressBar={true}
					/>
					<Routing />
				</FavSongProvider>
			</PlayerProvider>
		</AuthProvider>
	);
};

export default App;
