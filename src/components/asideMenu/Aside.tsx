import React from 'react'
import styles from './aside.module.scss';
import {AiOutlineHome, AiOutlineSearch} from 'react-icons/ai'
import {MdOutlineLibraryMusic, MdAlbum, MdOutlineAudiotrack} from 'react-icons//md'
import { VscLibrary } from 'react-icons/vsc'
import { TbMicrophone2 } from 'react-icons/tb'
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <ul>
          <li><Link to="/"><span><AiOutlineHome/></span> Home</Link></li>
          <li><Link to="/search"><span><AiOutlineSearch/></span> Search</Link></li>
          <li><Link to="/library"><span><VscLibrary/></span> Library</Link></li>
        </ul>
      </nav>
      <div className={styles.navbar}>
        <h4>My collection</h4>
        <ul>
          <li><Link to="/playlists"><span><MdOutlineLibraryMusic/></span> Playlists</Link></li>
          <li><Link to="/albums"><span><MdAlbum/></span>Albums</Link></li>
          <li><Link to="/tracks"><span><MdOutlineAudiotrack/></span>Tracks</Link></li>
          <li><Link to="/artists"><span><TbMicrophone2/></span>Artists</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Aside