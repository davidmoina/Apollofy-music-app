import { TbPlayerPlayFilled, TbPlayerSkipForwardFilled, TbPlayerSkipBackFilled, TbPlayerPauseFilled, TbRepeat, TbRepeatOff } from "react-icons/tb";
import styles from './control.module.scss';

type TrackControls = { 
   currentSong: number,
   isPlaying: boolean,
   onPlayPauseClick: (bool:boolean) => void,
   onPrevClick: () => void,
   onNextClick: () => void,
   onLoopClick:() => void,
   loop: boolean
}

export const Controls = ({currentSong, isPlaying, onPlayPauseClick, onPrevClick, onNextClick, onLoopClick, loop }:TrackControls) => {
   
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
         <button onClick={onLoopClick}>
            { loop ? <TbRepeat size={25} color={'#7b58e4'}/> : <TbRepeat size={25} color={'white'}/> }
         </button>
      </div>
   )
}



