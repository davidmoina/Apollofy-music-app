import React from 'react'
import { Outlet } from 'react-router-dom'
import Aside from '../../components/asideMenu/Aside'
import { PlayerMusic } from '../../components/player/PlayerMusic/PalyerMusic'
import styles from './home.module.scss'

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <aside className={styles.asideContainer}>
        <Aside/>
      </aside>

      <main className={styles.mainContainer}>
        <Outlet/>
      </main>
      
      <footer className={styles.playerContainer}>
        <PlayerMusic/>
      </footer>

    </div>
  )
}
