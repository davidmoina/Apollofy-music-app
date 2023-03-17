import React, { useEffect } from 'react'
import styles from './loginPage.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion'

export const LoginPage = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {
    const mouseMoveFunc = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMoveFunc);

    return () => {
      window.removeEventListener("mousemove", mouseMoveFunc)
    }

  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 500,
      y : mousePosition.y - 419
    }
  }
  

  return (
    <main className={styles.container}>
      <form action="" className={styles.form}>
        <h1>Login to your account</h1>
      </form>
      <motion.div 
      className={styles.cursorBackground}
      variants={variants}
      animate="default"
      transition={{
        delay: 0,
        x: { duration: 0 },
        y: { duration: 0 },
        default: { ease: "linear" }
      }}/>
    </main>
  )
}

