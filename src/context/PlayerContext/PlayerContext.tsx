import { createContext } from 'react';
import { Track } from '../../interfaces/songs';

interface ContextPlayerType {
  currentSong: number,
  songsList: Track[] | [],
  repeat: boolean,
  random: boolean,
  playing: boolean,
  audio: null,
  setCurrent: (id: number) => void,
  nextSong: () => void,
  prevSong: () => void,
  toggleRandom: () => void,
  toggleRepeat: () => void,
  togglePlaying: () => void,
  handleEnd: () => void,
  songsSet: (songsArr: []) => void
}

export const PlayerContext = createContext<ContextPlayerType>({} as ContextPlayerType)

