import song1 from "../assets/songs/song1.mp3";
import song2 from "../assets/songs/song2.mp3";
import song3 from "../assets/songs/song3.mp3";
import song4 from "../assets/songs/song4.mp3";
import img1 from "../assets/img/peiname-juana.jpg";
import img2 from "../assets/img/la-llegada.png";
import img3 from "../assets/img/realejo-beach.jpg";
import img4 from "../assets/img/darck-necessities.png";
import { Track } from '../interfaces/songs';

// export type Track = {
//    id: number,
//    artist: string,
//    name: string,
//    url?: string,
//    thumbnail: string,
//    genre: string,
//    liked: boolean
// }

export const tracks: Track[] = [
   {
      id:21,
      artist: 'La Plazuela',
      name: 'Peiname Juana',
      url: song1,
      thumbnail:img1,
      genre: "folk",
      liked: false
   },
   {
      id:22,
      artist: 'Rural Funny Funk',
      name: 'La Llegada',
      url: song2, 
      thumbnail:img2,
      genre: "folk",
      liked: false
   },
   {
      id:23,
      artist: 'La Plazuela',
      name: 'Realejo Beach',
      url: song3,
      thumbnail:img3,
      genre: "folk",
      liked: false
   },
   {
      id:24,
      artist: 'Red Hot Chili Peppers',
      name: 'Dark Necessities',
      url: song4, 
      thumbnail:img4,
      genre: "folk",
      liked: false
   },
];