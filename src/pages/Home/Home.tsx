import { Outlet } from 'react-router-dom'
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic';
import Aside from '../../components/asideMenu/Aside'
import styles from './home.module.scss'
import { NavBar } from '../../components/navbar/Navbar';

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
