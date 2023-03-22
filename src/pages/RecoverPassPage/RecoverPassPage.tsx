import { useForm, SubmitHandler } from 'react-hook-form';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import { InputForm } from '../../components/user/input/input/InputForm';
import { FormInputs } from '../../interfaces';
import styles from '../LoginPage/loginPage.module.scss';

export const RecoverPassPage = () => {
   const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

   const onSubmit: SubmitHandler<FormInputs>= (data) => {
      console.log(data);
   }

   return (
      <>
         <main className={styles.container}>
            <form onSubmit={ handleSubmit(onSubmit) } className={styles.form}>
               <h1> Change Password </h1>
                  <InputForm id='newPassword' placeholder='Password' inputType='password' register={ register } errors={ errors } required/>
                  <InputForm id='repeatPassword' placeholder='Repeat Password' inputType='password' register={ register } errors={ errors } required/>
               <div className='flex justify-center'>
                  <ButtonForm name='Change Password'/>
               </div>
            </form>
            <p className={styles.noAccountText}>Already have an account? Access here!</p>
         </main>
         <BackgroundAnimated/>
      </>
   )

}
