export interface FormInputs {
  firstName?: string,
  lastName?: string,
  email: string,
  password: string,
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