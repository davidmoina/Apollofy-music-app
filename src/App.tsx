import { FC } from 'react';
import { AuthProvider } from './context/AuthContext/AuthProvider';
import { Routing } from './routes/Routing.routes';
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
							duration: 2000,
						}}
					/>
					<Routing />
				</FavSongProvider>
			</PlayerProvider>
		</AuthProvider>
	);
};

export default App;
