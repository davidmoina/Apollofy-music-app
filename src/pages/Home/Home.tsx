import { Outlet } from 'react-router-dom'
import { NavBar } from '../../components/NavBar/NavBar';
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic';
import Aside from '../../components/asideMenu/Aside'
import styles from './home.module.scss'

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
