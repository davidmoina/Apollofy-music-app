import { useEffect, useState } from 'react';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import { InputForm } from '../../components/user/input/input/InputForm';
import { motion } from 'framer-motion'
import styles from '../LoginPage/loginPage.module.scss';

export const RegisterPage = () => {

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
        <h3>Welcome!</h3>
        <h1>Create your new account</h1>
        <div className='flex flex-1 gap-4 mt-0'>
            <InputForm id='firstName' placeholder='First Name' inputType='text'/>
            <InputForm id='lastName' placeholder='Last Name' inputType='text'/>
        </div>
        <InputForm id='email' placeholder='Email' inputType='email'/>
        <InputForm id='password' placeholder='Password' inputType='password'/>
        <InputForm id='repeatPassword' placeholder='Repeat Password' inputType='password'/>
        <InputForm id='birthday' placeholder='Birthday' inputType='date'/>
        <div className='mt-12'>
            <ButtonForm name='Sign Up'/>
        </div>
      </form>
      <p className={styles.noAccountText}>Already have an account? Access here!</p>
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
