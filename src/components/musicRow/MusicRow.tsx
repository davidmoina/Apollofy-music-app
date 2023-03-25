import styles from './musicRow.module.scss'
import { Tracks } from '../../interfaces'
import { useState } from 'react'
// icons
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md'

export const MusicRow = ({ position, thumbnail, artist, title }: Tracks) => {

  const [isLiked, setIsLiked] = useState(false)
  const [play, setPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div 
      className={styles.rowContainer}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}     
    >
      <div className={`${styles.songLeftContainer} transition-all`}>
        <span 
        className={`text-center ${styles.spanPlay} text-md`}
        onClick={() => setIsPlaying(!isPlaying)}
        >
          {   
            isPlaying ? 
              <MdPauseCircleFilled className='text-3xl rounded-lg' />
              : 
              (play ? (
                <MdPlayCircleFilled 
                  className={`${styles.play} text-3xl rounded-lg text-[#ffff66]`}
                />
              ) : (
                position + 1
              ))
          }
        </span>
        <img src={thumbnail} alt={title} />
        <div className={styles.songInfo}>
          <span>{title}</span>
          <span>{artist}</span>
        </div>
      </div>
      <p className={`hidden lg:block ${styles.albumTitle}`}>{title}</p>
      <div className={styles.songRightContainer}>
        <span 
          className={` ${styles.spanLike}`}
          onClick={() => setIsLiked(!isLiked)}
        >
          {
          isLiked ? (
            <AiFillHeart className='text-lg text-[#ffff66]'/>
          ) : (
            <AiOutlineHeart className='text-lg'/>
          )          
          }
        </span>
        <span>3:00</span>
      </div>
    </div>
  )
}
