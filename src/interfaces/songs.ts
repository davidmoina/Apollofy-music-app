export interface Musics {
	playlists: Playlist[];
	tracks: Track[];
	user: User[];
	albums: Album[];
	artists: Artist[];
	genres: Genre[];
}

export interface Album {
	_id: string;
	name: string;
	thumbnail: string;
	artist: string;
}

export interface Genre {
	_id: number;
	name: string;
}

export interface Playlist {
	id?: number;
	name: string;
	artists?: Artist[];
	isFollowed?: boolean;
	thumbnail: string;
	description?: string;
	publicAccessible?: boolean;
	primaryColor?: PrimaryColor;
}

export enum PrimaryColor {
	Fbdc00 = '#fbdc00',
}

export interface Track {
	_id: string;
	trackId: string;
	rating: number;
	popularity: number;
	duration: number;
	color: string;
	userId: string;
	albums: string;
	releasedAt: Date;
	likedBy: string[];
	name: string;
	artists: Artist[];
	url: string;
	thumbnail: string;
	genre: string;
	liked: boolean;
}

export interface Artist {
	id: string;
	name: string;
	_id: string;
}

export interface User {
	id: number;
	first_name: string;
	last_name: string;
	email: string;
	profilePicture: string;
	isLoggedin: boolean;
}
