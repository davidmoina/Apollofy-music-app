import { createContext } from 'react';
import { Track } from '../../interfaces/songs';

interface ContextPlayerType {
	currentSongNum: number;
	songsList: Track[] | [];
	repeat: boolean;
	random: boolean;
	playing: boolean;
	audio: Track | null;
	selectedTrack: Track | null;
	setCurrent: (id: number, song?: Track) => void;
	nextSong: () => void;
	prevSong: () => void;
	toggleRandom: () => void;
	toggleRepeat: () => void;
	togglePlaying: () => void;
	handleEnd: () => void;
	songsSet: (songsArr: Track | Track[]) => void;
	addSongToQueue: (song: Track) => void;
	setSelectedTrack: (song: Track | null) => void;
}

export const PlayerContext = createContext<ContextPlayerType>(
	{} as ContextPlayerType
);
