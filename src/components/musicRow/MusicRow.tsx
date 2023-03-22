import React from 'react'
import styles from './musicRow.module.scss'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { Tracks } from '../../interfaces'

export const MusicRow = ({ position, thumbnail, artist, title }: Tracks) => {
  return (
    <div className={styles.rowContainer}>
      <div className={styles.songLeftContainer}>
        <span>{position + 1}</span>
        <img src={thumbnail} alt={title} />
        <div className={styles.songInfo}>
          <span>{title}</span>
          <span>{artist}</span>
        </div>
      </div>
      <p className={styles.albumTitle}>{title}</p>
      <div className={styles.songRightContainer}>
        <span><AiFillHeart /></span>
        <span>3:00</span>
      </div>
    </div>
  )
}
