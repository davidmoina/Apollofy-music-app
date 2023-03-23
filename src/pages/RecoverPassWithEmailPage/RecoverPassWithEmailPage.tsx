import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '../../interfaces';
import { InputForm } from '../../components/user/input/input/InputForm';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import styles from '../LoginPage/loginPage.module.scss';

export const RecoverPassWithEmailPage = () => {
   const { register, handleSubmit, formState: { errors }} = useForm<FormInputs>();

   const navigate = useNavigate();

   const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
      if(data.email === "user@mail.com") {
         navigate("/")
      } else {
         alert("wrong data");
      }
   }

   return (
      <div className={styles.container}>
         <form onSubmit={ handleSubmit(onSubmit) } className={styles.form}>
            <h3> Recover password </h3>
            <h1> enter your email </h1>
            <InputForm 
               id='email' 
               placeholder='Email' 
               inputType='email' 
               register={ register } 
               errors={ errors } 
               required
            />
            <ButtonForm name='Send link'/>
         </form>
         <BackgroundAnimated/>
      </div>
   )
}
