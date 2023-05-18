import { PlayerContext } from './PlayerContext';
import { Track } from '../../interfaces/songs';
import { useReducer } from 'react';

const enum ACTIONS {
	SET_SONGS_ARRAY,
	SET_CURRENT_SONG,
	TOGGLE_RANDOM,
	TOGGLE_REPEAT,
	TOGGLE_PLAYING,
	SET_SELECTED_AUDIO,
}

type TypePayload = {
	currentSongNum: number;
	songsList: Track[] | [];
	repeat: boolean;
	random: boolean;
	playing: boolean;
	audio: Track | null;
	selectedTrack: Track | null;
};

type PlayerActions =
	| {
			type: ACTIONS.SET_SONGS_ARRAY;
			payload: {
				songsList: Track[] | [];
			};
	  }
	| {
			type: ACTIONS.SET_CURRENT_SONG;
			payload: {
				currentSongNum: number;
				audio: Track | null;
			};
	  }
	| {
			type: ACTIONS.TOGGLE_RANDOM;
			payload: {
				random: boolean;
			};
	  }
	| {
			type: ACTIONS.TOGGLE_REPEAT;
			payload: {
				repeat: boolean;
			};
	  }
	| {
			type: ACTIONS.TOGGLE_PLAYING;
			payload: {
				playing: boolean;
			};
	  }
	| {
			type: ACTIONS.SET_SELECTED_AUDIO;
			payload: {
				selectedTrack: Track | null;
			};
	  };

const initialValues: TypePayload = {
	currentSongNum: 0,
	songsList: [],
	repeat: false,
	random: false,
	playing: false,
	audio: null,
	selectedTrack: null,
};

const playerReducer = (
	state: typeof initialValues,
	action: PlayerActions
): typeof initialValues => {
	switch (action.type) {
		case ACTIONS.SET_SONGS_ARRAY:
			return {
				...state,
				songsList: action.payload.songsList ?? [],
			};

		case ACTIONS.SET_CURRENT_SONG:
			return {
				...state,
				currentSongNum: action.payload?.currentSongNum ?? 0,
				playing: true,
				audio: action.payload.audio,
			};

		case ACTIONS.TOGGLE_RANDOM:
			return {
				...state,
				random: action.payload?.random ?? false,
			};

		case ACTIONS.TOGGLE_REPEAT:
			return {
				...state,
				repeat: action.payload?.repeat ?? false,
			};

		case ACTIONS.TOGGLE_PLAYING:
			return {
				...state,
				playing: action.payload?.playing ?? false,
			};

		case ACTIONS.SET_SELECTED_AUDIO:
			return {
				...state,
				selectedTrack: action.payload.selectedTrack,
			};

		default:
			return state;
	}
};

type Props = {
	children: JSX.Element | JSX.Element[];
};

export const PlayerProvider = ({ children }: Props) => {
	const [playerState, dispatch] = useReducer(playerReducer, initialValues);

	//set the current song
	const setCurrent = (id: number, song?: Track) => {
		dispatch({
			type: ACTIONS.SET_CURRENT_SONG,
			payload: {
				currentSongNum: id,
				audio: song ?? null,
			},
		});
	};

	const setSelectedTrack = (song: Track | null) => {
		dispatch({
			type: ACTIONS.SET_SELECTED_AUDIO,
			payload: {
				selectedTrack: song,
			},
		});
	};
	//set songs array
	const songsSet = (songsArr: Track | Track[]) => {
		dispatch({
			type: ACTIONS.SET_SONGS_ARRAY,
			payload: {
				songsList: Array.isArray(songsArr) ? songsArr : [songsArr],
			},
		});
	};

	console.log(playerState.playing);

	//set playing state
	const togglePlaying = (play: boolean | null = null) => {
		dispatch({
			type: ACTIONS.TOGGLE_PLAYING,
			payload: {
				playing: play ? play : !playerState.playing,
			},
		});
	};

	// console.log(playerState.selectedTrack);

	//previous song
	const prevSong = () => {
		if (playerState.random) {
			return setCurrent(~~(Math.random() * playerState.songsList.length));
		}

		if (playerState.currentSongNum === 0) {
			return setCurrent(playerState.songsList.length - 1);
		} else {
			return setCurrent(playerState.currentSongNum - 1);
		}
	};

	//next song
	const nextSong = () => {
		if (playerState.currentSongNum === playerState.songsList.length - 1) {
			setCurrent(0);
		} else {
			setCurrent(playerState.currentSongNum + 1);
		}
	};

	//toggle repeat
	const toggleRepeat = () => {
		dispatch({
			type: ACTIONS.TOGGLE_REPEAT,
			payload: {
				repeat: !playerState.repeat,
			},
		});
	};

	//toggle random
	const toggleRandom = () => {
		dispatch({
			type: ACTIONS.TOGGLE_RANDOM,
			payload: {
				random: !playerState.random,
			},
		});
	};

	console.log(playerState.playing);

	const handleEnd = () => {
		if (playerState.random) {
			return setCurrent(~~(Math.random() * playerState.songsList.length));
		}

		if (playerState.repeat) {
			nextSong();
		} else if (
			playerState.currentSongNum ===
			playerState.songsList.length - 1
		) {
			togglePlaying(false);
			return;
		} else {
			nextSong();
		}
	};

	const addSongToQueue = (song: Track) => {
		dispatch({
			type: ACTIONS.SET_SONGS_ARRAY,
			payload: {
				songsList: [...playerState.songsList, song],
			},
		});
	};

	return (
		<PlayerContext.Provider
			value={{
				currentSongNum: playerState.currentSongNum,
				songsList: playerState.songsList,
				repeat: playerState.repeat,
				random: playerState.random,
				playing: playerState.playing,
				audio: playerState.audio,
				selectedTrack: playerState.selectedTrack,
				setCurrent,
				nextSong,
				prevSong,
				toggleRandom,
				toggleRepeat,
				togglePlaying,
				handleEnd,
				songsSet,
				addSongToQueue,
				setSelectedTrack,
			}}
		>
			{children}
		</PlayerContext.Provider>
	);
};
