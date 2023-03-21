import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/navbar/Navbar';
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic';
import Aside from '../../components/asideMenu/Aside'
import styles from './home.module.scss'

const samplePlaylists = [
  { image: 'src/assets/images/rock.jpeg', artist: 'Rock', song: "In da Club" },
  { image: 'src/assets/images/blues.jpeg', artist: 'Blues', song: "Wonderwall"  },
  { image: 'src/assets/images/hip-hop.jpeg', artist: 'Hip Hop', song: "Ver good understood"  },
  { image: 'src/assets/images/electronic.jpeg', artist: 'Electronic', song: "In da Club"}, 
  { image: 'src/assets/images/classical.jpg', artist: 'Classical', song: "In da Club" }
];

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <aside className={styles.asideContainer}>
        <Aside/>
      </aside>

      <main className={styles.mainContainer}>
        <NavBar />
        <Outlet/>
      </main>
      
      <footer className={styles.playerContainer}>
        <PlayerMusic/>
      </footer>

    </div>
  )
}
