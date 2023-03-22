import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { Controls } from '../Controls/Controls';
import { tracks } from '../../../data/traks';
import { formatTime } from '../../../utils/formatTime';
import { Volume } from '../Volume/Volume';
import { InfoTrack } from '../InfoTrack/InfoTrack';
import styles from './playerMusic.module.scss';

export const PlayerMusic = () => {

   const [trackIndex, setTrackIndex] = useState(0);
   const [trackProgress, setTrackProgress] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [volume, setVolume] = useState(0.5);
   const [loop, setLoop] = useState(false);
   
   const { artist, title, song, thumbnail } = tracks[trackIndex];
   
   const audioRef = useRef(new Audio(song));
   const intervalRef:{ current:number | undefined } = useRef();
   const isReady = useRef(false);

   const { duration } = audioRef.current;

   const toPrevTrack = () => {
      if(trackIndex - 1 < 0) {
         setTrackIndex(tracks.length - 1);
      } else {
         setTrackIndex(trackIndex - 1);
      }
   }

   const toNextTrack = () => {
      if(trackIndex < tracks.length - 1) {
         setTrackIndex(trackIndex + 1);
      } else {
         setTrackIndex(0);
      }
   }

   useEffect(() => {
      if(isPlaying) {
         audioRef.current.play();
      } else {
         audioRef.current.pause();
      }
   }, [isPlaying]);


   useEffect(() => {
      return () => {
         audioRef.current.pause();
         clearInterval(intervalRef.current);
      }
   }, []);

   useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(song);
      setTrackProgress(audioRef.current.currentTime);

      audioRef.current.volume = 0.2;

      if(isReady.current && isPlaying) {
         audioRef.current.play();
         setIsPlaying(true);
         startTimer();
      } else {
         isReady.current = true;
      }

      if(loop) {
         audioRef.current.loop = true; 
      } else {
         audioRef.current.loop = false;
      }

   }, [trackIndex, isPlaying]);

   const onLoopClick = () => {
      setLoop(!loop);
   };

   const startTimer = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
         if(audioRef.current.ended) {
            toNextTrack();
         } else {
            setTrackProgress(audioRef.current.currentTime);
         }
      }, 1000);
   }

   const handleVolumeChange = (event: ChangeEvent<HTMLInputElement>): void => {
      setVolume(parseFloat(event.currentTarget.value));
      audioRef.current.volume = parseFloat(event.currentTarget.value);
   };

   const onScrub = (value:string) => {
      clearInterval(intervalRef.current);
      audioRef.current.currentTime = parseInt(value);
      setTrackProgress(audioRef.current.currentTime);
   }
   
   const onScrubEnd = () => {
      if(!isPlaying) {
         setIsPlaying(true);
      }
      startTimer();
   }

   return (
      <>
         <div className={`w-full md:hidden ${styles.progressMvl}`}>
            <input 
               type="range"
               value={ trackProgress }
               step="1"
               min="0"
               max={ duration ? duration : `${duration}` }
               className={`w-full md:hidden ${styles.progressBar}`} 
               onChange={ (e) => onScrub(e.target.value) }
               onMouseUp={ onScrubEnd }
               onKeyUp={ onScrubEnd }
            />
         </div>
         <div className={`${styles.containerPlayer} flex justify-between items-center mb-16 md:mb-0 md:py-3 px-2 lg:px-6`}>
            <div className='flex-1 w-2/5 md:w-1/5'>
               <InfoTrack title={ title } artist={ artist } thumbnail={ thumbnail }/>
            </div>
            <div className='flex w-3/5 md:3/5 flex-col justify-end md:justify-center items-end md:items-center'>
               <Controls 
                  isPlaying={ isPlaying }
                  onPrevClick={ toPrevTrack }
                  onNextClick={ toNextTrack }
                  onPlayPauseClick={ setIsPlaying }
                  onLoopClick={ onLoopClick }
                  loop={ loop }
               />
               <div className='hidden md:flex progress-track'>
                  <span>{ formatTime(trackProgress) }</span>
                  <input 
                     type="range"
                     value={ trackProgress }
                     step="1"
                     min="0"
                     max={ duration ? duration : `${duration}` }
                     className="w-60 lg:w-96 mx-2 myRange"
                     onChange={ (e) =>{onScrub(e.target.value); console.log(e.target.value)} }
                     onMouseUp={ onScrubEnd }
                     onKeyUp={ onScrubEnd }
                  />
                  <span>{ !isNaN(duration) ? formatTime(duration) : "0:00"  }</span>
               </div>
            </div>
            <div className='w-1/5 hidden md:flex justify-end'>
               <Volume
                  volume={ volume }
                  onChange={ handleVolumeChange }
               />
            </div>
         </div>
      </>
   )
}
