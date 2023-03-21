
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic';
import { NavBar } from '../../components/NavBar/NavBar'; 
import Aside from '../../components/asideMenu/Aside';
import styles from './home.module.scss'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <aside className={styles.asideContainer}>
        <Aside/>
      </aside>
      <main className={styles.mainContainer}>
        <NavBar />
        <h1>Home page</h1>
      </main>
      <footer className={styles.playerContainer}>
        <PlayerMusic/>
      </footer>

    </div>
  )
}
