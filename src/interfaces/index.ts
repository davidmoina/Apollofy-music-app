export interface FormInputs {
	name?: string;
	firstName?: string;
	lastName?: string;
	email: string;
	password: string;
	confirmPassword: string;
	birthday: Date;
	oldPassword: string;
	newPassword: string;
	repeatPassword: string;
}

export interface Tracks {
	id?: number;
	artist: string;
	title: string;
	song?: string;
	thumbnail: string;
	position: number;
}
