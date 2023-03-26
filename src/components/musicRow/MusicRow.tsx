import styles from './musicRow.module.scss'
import { useContext, useState } from 'react'
// icons
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md'
import { Track } from '../../interfaces/songs'
import { ContextTypeFav, FavSongContext } from '../../context/favSongsContext/FavSongsContext'

export interface Props {
  position: number,
  thumbnail: string,
  artist: string,
  title: string,
  actualSong?: Track
}

export const MusicRow = ({ position, thumbnail, artist, title, actualSong }: Props) => {


  const {addToFavorite, removeFromFavorite} = useContext(FavSongContext) as ContextTypeFav

  const [isLiked, setIsLiked] = useState(actualSong?.liked)
  const [play, setPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)


  const postData = async (url = "", data = {}) => {
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })
    return response.json()
  }



  const handleLike = (song: Track) => {
    if (isLiked) {
      setIsLiked(!isLiked)
      song.liked = false;
      postData(`http://localhost:4000/tracks/${song.id}`, { ...song, liked: false })
      removeFromFavorite(song)
    } else {
      setIsLiked(!isLiked)
      postData(`http://localhost:4000/tracks/${song.id}`, { ...song, liked: true })
      song.liked = true;
      addToFavorite(song)
    }
  }

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
          className={styles.spanLike}
          onClick={() => handleLike(actualSong)}
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
