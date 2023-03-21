import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/navbar/Navbar';
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic';
import Aside from '../../components/asideMenu/Aside'
import styles from './home.module.scss'
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <aside className={styles.asideContainer}>
        <Aside/>
      </aside>

      <main className={styles.mainContainer}>
        <NavBar />
        <div className={styles.contentContainer}>
          <Outlet/>
        </div>
      </main>
      
      <footer className={styles.playerContainer}>
        <PlayerMusic/>
        <MobileNavBar/>
      </footer>

    </div>
  )
}
