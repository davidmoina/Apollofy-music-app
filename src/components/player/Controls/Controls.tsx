import { TbPlayerPlayFilled, TbPlayerSkipForwardFilled, TbPlayerSkipBackFilled, TbPlayerPauseFilled } from "react-icons/tb";
import styles from './control.module.scss';

type TrackControls = { 
   isPlaying: boolean,
   onPlayPauseClick: (bool:boolean) => void,
   onPrevClick: () => void,
   onNextClick: () => void
}

export const Controls = ({ isPlaying, onPlayPauseClick, onPrevClick, onNextClick }:TrackControls) => {
   return (
      <div className={ `${styles.buttonsPlayer} flex justify-end md:justify-center` }>
         <button type="button" className="m-2 icon" aria-label="Previous" onClick={ onPrevClick }>
            <TbPlayerSkipBackFilled size={25} color={'white'}/>
         </button>
            {isPlaying 
               ? (<button type="button" className="m-2 icon" onClick={ () => onPlayPauseClick(false) } aria-label="Pause">
                     <TbPlayerPauseFilled size={25} style={{background:"white", borderRadius:"100px", padding:"5px"}}/>
                  </button>) 
               : (<button type="button" className="m-2 icon" onClick={ () => onPlayPauseClick(true) } aria-label="Play">
                     <TbPlayerPlayFilled size={25} style={{background:"white", borderRadius:"100px", padding:"5px"}}/>
                  </button>)
            }
         <button type="button" className="m-2 icon" aria-label="Next" onClick={ onNextClick }>
            <TbPlayerSkipForwardFilled size={25} color={'white'}/>
         </button>
      </div>
   )
}


