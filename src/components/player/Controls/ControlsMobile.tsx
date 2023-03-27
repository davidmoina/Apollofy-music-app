import { TbPlayerPlayFilled, TbPlayerSkipForwardFilled, TbPlayerSkipBackFilled, TbPlayerPauseFilled, TbRepeat, TbArrowsShuffle, TbRepeatOff } from "react-icons/tb";
import styles from './controls.module.scss';

type TrackControls = { 
   isPlaying: boolean,
   onPlayPauseClick: (bool:boolean) => void,
   onPrevClick: () => void,
   onNextClick: () => void,
   onLoopClick:() => void,
   loop: boolean
}

export const ControlsMobile = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick, onLoopClick, loop }:TrackControls) => {
   return (
      <div className={ `${styles.buttonsPlayer} flex justify-end md:justify-center` }>
         <button className="m-2" onClick={ onLoopClick }>
            { loop ? <TbArrowsShuffle /> : <TbArrowsShuffle /> }
         </button>
         <button type="button" className="m-2" aria-label="Previous" onClick={ onPrevClick }>
            <TbPlayerSkipBackFilled size={25} color={'white'}/>
         </button>
            {isPlaying 
               ? (<button type="button" className={`m-2 ${styles.buttonPause}`} onClick={ () => onPlayPauseClick(false) } aria-label="Pause">
                     <TbPlayerPauseFilled size={30}/>
                  </button>) 
               : (<button type="button" className={`m-2 ${styles.buttonPlay}`} onClick={ () => onPlayPauseClick(true) } aria-label="Play">
                     <TbPlayerPlayFilled size={30}/>
                  </button>)
            }
         <button type="button" className="m-2" aria-label="Next" onClick={ onNextClick }>
            <TbPlayerSkipForwardFilled size={25} color={'white'}/>
         </button>
         <button className="m-2" onClick={ onLoopClick }>
            { loop ? <TbRepeat color={'#ffff66'}/> : <TbRepeat /> }
         </button>
      </div>
   )
}
