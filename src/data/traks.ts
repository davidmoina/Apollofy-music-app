import song1 from "../assets/songs/song1.mp3";
import song2 from "../assets/songs/song2.mp3";
import song3 from "../assets/songs/song3.mp3";
import song4 from "../assets/songs/song4.mp3";
import img1 from "../assets/img/peiname-juana.jpg";
import img2 from "../assets/img/la-llegada.png";
import img3 from "../assets/img/realejo-beach.jpg";
import img4 from "../assets/img/darck-necessities.png";

export type TracksType = {
   id: number,
   artist: string,
   title: string,
   song?: string,
   thumbnail: string
}

export const tracks: TracksType[] = [
   {
      id:1,
      artist: 'La Plazuela',
      title: 'Peiname Juana',
      song: song1,
      thumbnail:img1
   },
   {
      id:2,
      artist: 'Rural Funny Funk',
      title: 'La Llegada',
      song: song2, 
      thumbnail:img2
   },
   {
      id:3,
      artist: 'La Plazuela',
      title: 'Realejo Beach',
      song: song3,
      thumbnail:img3 
   },
   {
      id:4,
      artist: 'Red Hot Chili Peppers',
      title: 'Dark Necessities',
      song: song4, 
      thumbnail:img4
   },
];