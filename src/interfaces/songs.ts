export interface Musics {
  playlists: Playlist[];
  tracks:    Track[];
  user:      User[];
  albums:    Album[];
  artists:   Artist[];
  genres:    Genre[];
}

export interface Album {
  id:       number;
  name:     string;
  imageUrl: string;
  artist:   string;
}

export interface Artist {
  id:         number;
  name:       string;
  genres:     string[];
  popularity: number;
  photoUrl:   string;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface Playlist {
  id?:               number;
  name:             string;
  isFollowed?:       boolean;
  thumbnail:        string;
  description?:      string;
  publicAccessible?: boolean;
  primaryColor?:     PrimaryColor;
}

export enum PrimaryColor {
  Fbdc00 = "#fbdc00",
}

export interface Track {
  id:        number;
  name:      string;
  artist:    string;
  url:       string;
  thumbnail: string;
  genre:     string;
  liked:     boolean;
}

export interface User {
  id:             number;
  first_name:     string;
  last_name:      string;
  email:          string;
  profilePicture: string;
  isLoggedin:     boolean;
}
