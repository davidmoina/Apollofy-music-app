import { useState, useEffect, useRef, ChangeEvent, useContext } from 'react';
import { Controls } from '../Controls/Controls';
import { formatTime } from '../../../utils/formatTime';
import { Volume } from '../Volume/Volume';
import { InfoTrack } from '../InfoTrack/InfoTrack';
import styles from './playerMusic.module.scss';
import { PlayerContext } from '../../../context/PlayerContext/PlayerContext';

export const PlayerMusic = () => {

   const [trackProgress, setTrackProgress] = useState(0);
   const [volume, setVolume] = useState(0.3);
   const { 
      audio,
      currentSongNum,
      songsList,
      repeat,
      playing,
      nextSong,
      prevSong,
      toggleRepeat,
      togglePlaying
   } = useContext(PlayerContext);

   useEffect(() => {
      return () => {
         audioRef.current.pause();
         clearInterval(intervalRef.current);
      }
   }, []);
   
   const audioRef = useRef(new Audio(songsList[currentSongNum]?.url));
   const intervalRef:{ current:number | undefined } = useRef();
   const isReady = useRef(false);

   const { duration } = audioRef.current;

   useEffect(() => {
      if(playing) {
         audioRef.current.play();
      } else {
         audioRef.current.pause();
      }
   }, [playing]);

   useEffect(() => {
      audioRef.current.pause();
      audioRef.current = new Audio(songsList[currentSongNum]?.url);
      setTrackProgress(audioRef.current.currentTime);

      audioRef.current.volume = volume;

      if(isReady.current && playing) {
         audioRef.current.play();
         startTimer();
      } else {
         isReady.current = true;
      }

      if(repeat) {
         audioRef.current.loop = true; 
      } else {
         audioRef.current.loop = false;
      }
      setTrackProgress(audioRef.current.currentTime);
      startTimer();

   }, [audio, currentSongNum]);

   useEffect(() => {
      if (!repeat) {
         audioRef.current.loop = false;
      } else {
         audioRef.current.loop = true;
      }
      
   }, [repeat])
   

   const startTimer = () => {
      clearInterval(intervalRef.current);

      intervalRef.current = setInterval(() => {
         if(audioRef.current.ended) {
            nextSong();
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
      if(!playing) {
         togglePlaying();
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
               <InfoTrack name={ songsList[currentSongNum]?.name } artist={ songsList[currentSongNum]?.artist } thumbnail={ songsList[currentSongNum]?.thumbnail }/>
            </div>
            <div className='flex w-3/5 md:3/5 flex-col justify-end md:justify-center items-end md:items-center'>
               <Controls
                  isPlaying={ playing }
                  onPrevClick={ prevSong }
                  onNextClick={ nextSong }
                  onPlayPauseClick={ togglePlaying }
                  onLoopClick={ toggleRepeat }
                  loop={ repeat }
               />
               <div className='hidden md:flex'>
                  <span>{ formatTime(trackProgress) }</span>
                  <input 
                     type="range"
                     value={ trackProgress }
                     step="1"
                     min="0"
                     max={ duration ? duration : `${duration}` }
                     className={`w-60 lg:w-96 mx-2 ${styles.progressBar}`}
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
