import { PlayerContext } from './PlayerContext';
import { Track } from '../../interfaces/songs';
import { useReducer } from 'react';

const enum ACTIONS {
  SET_SONGS_ARRAY,
  SET_CURRENT_SONG,
  TOGGLE_RANDOM,
  TOGGLE_REPEAT,
  TOGGLE_PLAYING
}

type TypePayload = {
  currentSongNum: number,
  songsList: Track[] | [],
  repeat: boolean,
  random: boolean,
  playing: boolean,
  audio: Track | null,
}

type PlayerActions = {
  type: ACTIONS.SET_SONGS_ARRAY,
  payload: {
    songsList: Track[] | []
  }
} | {
  type: ACTIONS.SET_CURRENT_SONG,
  payload: {
    currentSongNum: number,
    audio: Track | null
  }
} | {
  type: ACTIONS.TOGGLE_RANDOM,
  payload: {
    random: boolean
  }
} | {
  type: ACTIONS.TOGGLE_REPEAT,
  payload: {
    repeat: boolean
  }
} | {
  type: ACTIONS.TOGGLE_PLAYING,
  payload: {
    playing: boolean
  }
}

const initialValues: TypePayload = {
  currentSongNum: 0,
  songsList: [],
  repeat: false,
  random: false,
  playing: false,
  audio: null
}

const playerReducer = (state: typeof initialValues, action: PlayerActions): typeof initialValues=> {
  switch (action.type) {
    case ACTIONS.SET_SONGS_ARRAY:
      return {
        ...state,
        songsList:action.payload.songsList
      }

    case ACTIONS.SET_CURRENT_SONG:
      return {
        ...state,
        currentSongNum: action.payload?.currentSongNum ?? 0,
        playing: true,
        audio: action.payload.audio
      }

    case ACTIONS.TOGGLE_RANDOM:
      return {
        ...state,
        random: action.payload?.random ?? false
      }

    case ACTIONS.TOGGLE_REPEAT:
      return {
        ...state,
        repeat: action.payload?.repeat ?? false
      }

    case ACTIONS.TOGGLE_PLAYING:
      return {
        ...state,
        playing: action.payload?.playing ?? false
      }
  
    default:
      return state
  }
}

type Props = {
  children: JSX.Element | JSX.Element[]
}

export const PlayerProvider = ({children}:Props) => {

  const [playerState, dispatch] = useReducer(playerReducer, initialValues)
  
  //set the current song
  const setCurrent = (id: number, song?: Track) => {
    dispatch({
      type: ACTIONS.SET_CURRENT_SONG, 
      payload: {
        currentSongNum: id,
        audio: song ?? null
      }
      })
  }
  //set songs array
  const songsSet = (songsArr: Track) => {
    dispatch({
      type: ACTIONS.SET_SONGS_ARRAY,
      payload: {
        songsList: [songsArr]
      }
    })
  }

  //set playing state
  const togglePlaying = () => {
    dispatch({
      type: ACTIONS.TOGGLE_PLAYING,
      payload: {
        playing: !playerState.playing
      }
    })
  }

  //previous song
  const prevSong = () => {
    if (playerState.random) {
      return setCurrent(~~(Math.random() * playerState.songsList.length))
    }

    if (playerState.currentSongNum === 0) {
      return setCurrent(playerState.songsList.length - 1)
    } else {
      return setCurrent(playerState.currentSongNum - 1)
    }
  }

  //next song
  const nextSong = () => {
    if (playerState.random) {
      return setCurrent(~~(Math.random() * playerState.songsList.length))
    }
    if (playerState.currentSongNum === playerState.songsList.length - 1) {
      setCurrent(0)
    } else {
      setCurrent(playerState.currentSongNum + 1)
    }
  }

  //toggle repeat
  const toggleRepeat = () => {
    dispatch({
      type: ACTIONS.TOGGLE_REPEAT,
      payload: {
        repeat: !playerState.repeat
      }
    })
  }

  //toggle random
  const toggleRandom = () => {
    dispatch({
      type: ACTIONS.TOGGLE_REPEAT,
      payload: {
        repeat: !playerState.random
      }
    })
  }

  const handleEnd = () => {
    if(playerState.random) {
      return setCurrent(~~(Math.random() * playerState.songsList.length))
    } else {
      if(playerState.repeat) {
        nextSong()
      } else if (playerState.currentSongNum === playerState.songsList.length - 1 ){
        return
      } else {
        nextSong()
      }
    }
  }

  const addSongToQueue= (song: Track) => {
    dispatch({
      type: ACTIONS.SET_SONGS_ARRAY,
      payload: {
        songsList: [...playerState.songsList, song]
      }
    })
  }

  console.log(playerState.repeat);
  

  return (
    <PlayerContext.Provider value={{
      currentSongNum: playerState.currentSongNum,
      songsList: playerState.songsList,
      repeat: playerState.repeat,
      random: playerState.random,
      playing: playerState.playing,
      audio: playerState.audio,
      setCurrent,
      nextSong,
      prevSong,
      toggleRandom,
      toggleRepeat,
      togglePlaying,
      handleEnd,
      songsSet,
      addSongToQueue
    }}>
      {children}
    </PlayerContext.Provider>
  )
}
