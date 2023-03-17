import  { useEffect } from 'react'
import styles from './loginPage.module.scss';
import { useState } from 'react';
import { motion } from 'framer-motion'
import { InputForm } from '../../components/user/input/input/InputForm';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';

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
    <>
    <main className={styles.container}>
      <form action="" className={styles.form}>
        <h3>Welcome Back,</h3>
        <h1>Login to your account</h1>
        <InputForm id='firstName' placeholder='First Name' inputType='text'/>
        <InputForm id='lastName' placeholder='Last Name' inputType='text'/>
        <InputForm id='password' placeholder='Password' inputType='password'/>
        <div className={styles.rememberContainer}> 
          <div className={styles.checkContainer}>
            <input type="checkbox" id="cbx2" className={styles.cbx2} style={{display: 'none'}}/>
            <label htmlFor="cbx2" className={styles.check}>
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                    <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z"></path>
                    <polyline points="1 9 7 14 15 4"></polyline>
                </svg>
            </label>
            <span>Remember me</span>
          </div>
          <span>Forgot Password</span>
        </div>
        <ButtonForm />
      </form>
      <p className={styles.noAccountText}>Don't have an account? Join free today</p>
    </main>
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
    </>
    
  )
}

