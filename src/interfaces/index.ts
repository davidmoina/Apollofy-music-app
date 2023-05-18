export interface FormInputs {
	name?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	password?: string;
	rol?: string;
	confirmPassword?: string;
	birthday?: Date;
	oldPassword?: string;
	newPassword?: string;
	repeatPassword?: string;
	playlistName?: string;
	playlistDescription?: string;
	artists?: string;
	genre?: string;
	duration?: string;
	thumbnail?: string;
	url?: string;
	albums?: string[];
}

export interface Tracks {
	id?: number;
	artist: string;
	title: string;
	song?: string;
	thumbnail: string;
	position: number;
}

export interface PlaylistInputs extends FormInputs {
	playlistName?: string;
	playlistDescription?: string;
	// thumbnail?: string;
}
// export interface PlayInp {
// 	playlistName: string;
// 	playlistDescription: string;
// 	thumbnail?: string;
// }
