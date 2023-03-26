import { Outlet } from 'react-router-dom';
import { Navbar } from '../../components/Navbar/Navbar';
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic';
import Aside from '../../components/asideMenu/Aside'
import MobileNavBar from '../../components/MobileNavBar/MobileNavBar';
import styles from './home.module.scss';

export const Home = () => {


  return (
    <div className={styles.homeContainer}>
      <aside className={styles.asideContainer}>
        <Aside/>
      </aside>

      <main className={styles.mainContainer}>
        <Navbar />
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
