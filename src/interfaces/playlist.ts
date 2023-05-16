import { Track } from './songs';

// interface Tracks {
// 	trackId: string;
// 	order: number;
// }

interface Followed {
	userId: string;
}

export interface Playlist<T> {
	_id: string;
	name: string;
	collaborative: boolean;
	description: string;
	primaryColor: string;
	cover: string;
	thumbnail: string;
	publicAccessible: boolean;
	numberSongs: number;
	followers: number;
	rating: number;
	userId: T;
	tracks: Track[];
	followedBy: Followed[];
}
