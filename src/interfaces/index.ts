export interface FormInputs {
  firstName?: string,
  lastName?: string,
  email: string,
  password: string,
  oldPassword: string,
  newPassword:string,
  repeatPassword?: string,
  birthday?: string,
}

export interface Tracks {
  id?: number,
  artist: string,
  title: string,
  song?: string,
  thumbnail: string,
  position: number
}