import { createContext } from 'react';
import { Track } from '../../interfaces/songs';

export type ContextTypeFav = {
	addToFavorite: (song: Track) => void;
	removeFromFavorite: (song: Track) => void;
	favorite: Track[];
};

export const FavSongContext = createContext<ContextTypeFav | null>(null);
