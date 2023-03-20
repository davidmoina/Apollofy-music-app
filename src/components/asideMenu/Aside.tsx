import React from 'react'
import styles from './aside.module.scss';
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineLibraryMusic, MdAlbum, MdOutlineAudiotrack} from 'react-icons//md'
import { VscLibrary } from 'react-icons/vsc'
import { TbMicrophone2 } from 'react-icons/tb'

const Aside = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li><span><AiOutlineHome/></span> Home</li>
          <li><span><AiOutlineSearch/></span> Search</li>
          <li><span><VscLibrary/></span> Library</li>
        </ul>
      </nav>
      <div className={styles.navbar}>
        <h4>My collection</h4>
        <ul>
          <li><span><MdOutlineLibraryMusic/></span> Playlists</li>
          <li><span><MdAlbum/></span>Albums</li>
          <li><span><MdOutlineAudiotrack/></span>Tracks</li>
          <li><span><TbMicrophone2/></span>Artists</li>
        </ul>
      </div>
    </div>
  )
}

export default Aside