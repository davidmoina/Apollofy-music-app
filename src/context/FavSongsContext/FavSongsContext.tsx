import { Dispatch, SetStateAction, createContext } from 'react';
import { Track } from '../../interfaces/songs';

export type ContextTypeFav = {
	addToFavorite: (song: Track) => void;
	removeFromFavorite: (song: Track) => void;
	setToggle: Dispatch<SetStateAction<boolean>>;
	toggle: boolean;
	data: Track[];
	getLikedSongs: (userId: string) => Promise<void>;
	playlistReloading: () => void;
	reloadPlaylist: boolean;
};

export const FavSongContext = createContext<ContextTypeFav>(
	{} as ContextTypeFav
);
