import { useState, useEffect, useRef, ChangeEvent } from 'react';
import { useFetch } from '../../../api/useFetch';
import { Controls } from '../Controls/Controls';
import { ControlsMobile } from '../Controls/ControlsMobile';
import { formatTime } from '../../../utils/formatTime';
import { Volume } from '../Volume/Volume';
import { InfoTrack } from '../InfoTrack/InfoTrack';
import { AiOutlineClose } from "react-icons/ai";
import styles from './playerMusic.module.scss';

export const PlayerMusic = () => {

   const { data: tracks } = useFetch("http://localhost:4000/tracks");

   const [trackIndex, setTrackIndex] = useState(0);
   const [trackProgress, setTrackProgress] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [volume, setVolume] = useState(0.3);
   const [loop, setLoop] = useState(false);

   const [showModal, setShowModal] = useState(false);
   
   const audioRef = useRef(new Audio(tracks[trackIndex]?.url));
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
      audioRef.current = new Audio(tracks[trackIndex]?.url);
      setTrackProgress(audioRef.current.currentTime);

      audioRef.current.volume = volume;

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

      setTrackProgress(audioRef.current.currentTime);
      startTimer();

   }, [trackIndex, tracks]);

   const onLoopClick = () => {

      if (loop) {
         setLoop(false);
         audioRef.current.loop = false;
      } else {
         setLoop(true);
         audioRef.current.loop = true;
      }
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

   const closeModal = () => {
      setShowModal(false);
   };

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
         <div className={`${styles.containerPlayer} flex justify-center items-center mb-16 pl-0 pr-3 lg:justify-between md:mb-0 md:py-3 md:px-2 lg:px-6`}>
         {!showModal 
            ? (<>
                  <div className={`flex-1 w-1/3 ${styles.clickModal}`}  onClick={() => setShowModal(!showModal)}>
                     <InfoTrack 
                        name={ tracks[trackIndex]?.name } 
                        artist={ tracks[trackIndex]?.artist } 
                        thumbnail={ tracks[trackIndex]?.thumbnail }
                        />
                  </div>
                  <div className='flex w-1/3 flex-col justify-center lg:justify-end items-end md:items-center'>
                     <Controls 
                        isPlaying={ isPlaying }
                        onPrevClick={ toPrevTrack }
                        onNextClick={ toNextTrack }
                        onPlayPauseClick={ setIsPlaying }
                        onLoopClick={ onLoopClick }
                        loop={ loop }
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
         </>)
         : (<>
               <div className={`  ${styles.modal} ${styles.modalEnter} ${styles.modalEnterActive}`}>
                  
                  <div className={styles.modalContent}>

                  <div className={styles.buttonModal}>
                     <button onClick={closeModal}>
                        <AiOutlineClose />
                     </button>
                  </div>
                  <div className={`flex justify-center items-center ${styles.imgSong}`}>
                     <img src={ tracks[trackIndex]?.thumbnail } alt="" />
                  </div>
                  <div className={`flex flex-col items-center ${styles.infoTrack}`}>
                     <h2 className='text-white'>{ tracks[trackIndex]?.name }</h2>
                     <h3 className='text-white'>{ tracks[trackIndex]?.artist }</h3>
                     <input 
                        type="range"
                        value={ trackProgress }
                        step="1"
                        min="0"
                        max={ duration ? duration : `${duration}` }
                        className={`w-full ${styles.progressBar}`}
                        onChange={ (e) =>{onScrub(e.target.value); console.log(e.target.value)} }
                        onMouseUp={ onScrubEnd }
                        onKeyUp={ onScrubEnd }
                     />  
                     <div className='flex justify-between w-full mt-0.5'>
                        <span>{ formatTime(trackProgress) }</span>
                        <span>{ !isNaN(duration) ? formatTime(duration) : "0:00"  }</span>
                     </div>   
                     <ControlsMobile
                        isPlaying={ isPlaying }
                        onPrevClick={ toPrevTrack }
                        onNextClick={ toNextTrack }
                        onPlayPauseClick={ setIsPlaying }
                        onLoopClick={ onLoopClick }
                        loop={ loop }
                     />
                  </div>
                  <div></div>
                  </div>
               </div>
               </>
            )

            }
            <div className='w-1/3 hidden md:flex justify-end'>
               <Volume
                  volume={ volume }
                  onChange={ handleVolumeChange }
               />
            </div>
         </div>
      </>
   )
}
