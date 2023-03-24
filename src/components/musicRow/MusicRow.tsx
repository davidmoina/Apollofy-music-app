import styles from './musicRow.module.scss'
import { Tracks } from '../../interfaces'
import { useState } from 'react'
// icons
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md'

interface Props {
  setCurrent: (id: number) => void,
  currentSong: number,
  togglePlaying: () => void,
  position: number,
  thumbnail: string,
  artist: string,
  title: string
}

export const MusicRow = ({setCurrent, currentSong, togglePlaying, position, thumbnail, artist, title }: Props) => {

  const [isLiked, setIsLiked] = useState(false)
  const [play, setPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClickSong = () => {
    setIsPlaying(!isPlaying)
    if(position !== currentSong) {
      setCurrent(position)
      return
    }
    togglePlaying()
  }

  return (
    <div 
      className={styles.rowContainer}
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}   
    >
      <div className={`${styles.songLeftContainer} transition-all`}>
        <span 
        className={`${styles.spanPlay} text-md`}
        onClick={handleClickSong}
        >
          {   
            isPlaying ? 
              <MdPauseCircleFilled className='text-3xl rounded-lg' />
              : 
              (play ? (
                <MdPlayCircleFilled 
                  className={`${styles.play} text-3xl rounded-lg text-green-400`}
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
      <p className={styles.albumTitle}>{title}</p>
      <div className={styles.songRightContainer}>
        <span 
          className={styles.spanLike}
          onClick={() => setIsLiked(!isLiked)}
        >
          {
          isLiked ? (
            <AiFillHeart className='text-3xl text-red-500'/>
          ) : (
            <AiOutlineHeart className='text-3xl'/>
          )          
          }
        </span>
        <span>3:00</span>
      </div>
    </div>
  )
}
