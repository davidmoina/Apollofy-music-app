import styles from './musicRow.module.scss'
import { useContext, useState } from 'react'
// icons
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import { MdPlayCircleFilled, MdPauseCircleFilled } from 'react-icons/md'
import { Track } from '../../interfaces/songs'
import { ContextTypeFav, FavSongContext } from '../../context/favSongsContext/FavSongsContext'
import { PlayerContext } from '../../context/PlayerContext/PlayerContext';

export interface Props {
  position: number,
  thumbnail: string,
  artist: string,
  title: string,
  actualSong: Track
}

export const MusicRow = ({ actualSong, position, thumbnail, artist, title }: Props) => {

  const {addToFavorite, removeFromFavorite} = useContext(FavSongContext) as ContextTypeFav

  const {audio, addSongToQueue, setCurrent, togglePlaying, songsSet } = useContext(PlayerContext);

  const [isLiked, setIsLiked] = useState(actualSong?.liked)
  const [play, setPlay] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleClickSong = () => {
    setIsPlaying(!isPlaying)

    if(actualSong?.id !== audio?.id) {
      songsSet(actualSong)
      setCurrent(0, actualSong)
      return
    }
    togglePlaying()
  }

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
          onClick={() => handleLike(actualSong)}
        >
          {
          isLiked ? (
            <AiFillHeart className='text-3xl text-red-500'/>
          ) : (
            <AiOutlineHeart className='text-3xl'/>
          )          
          }
        </span>
        <span onClick={() => addSongToQueue(actualSong)}>3:00</span>
      </div>
    </div>
  )
}
