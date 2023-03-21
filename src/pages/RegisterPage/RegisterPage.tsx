import { BackgroundAnimated } from '../../components/BackgroundAnimated/BackgroundAnimated';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';
import { InputForm } from '../../components/user/input/input/InputForm';
import styles from '../LoginPage/loginPage.module.scss';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from '../../interfaces';

export const RegisterPage = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs>= (data) => {
    console.log(data);
    
  }

  return (
    <>
    <main className={styles.container}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <h3>Welcome!</h3>
        <h1>Create your new account</h1>
        <div className={`${styles.inputsContainer}`}>
            <InputForm id='firstName' placeholder='First Name' inputType='text' register={register} errors={errors} required/>
            <InputForm id='lastName' placeholder='Last Name' inputType='text' register={register} errors={errors} required/>
        </div>
        <InputForm id='email' placeholder='Email' inputType='email' register={register} errors={errors} required/>
        <InputForm id='password' placeholder='Password' inputType='password' register={register} errors={errors} required/>
        <InputForm id='repeatPassword' placeholder='Repeat Password' inputType='password' register={register} errors={errors} required/>
        <InputForm id='birthday' placeholder='Birthday' inputType='date' register={register} errors={errors} required/>
        <div className='flex justify-center'>
            <ButtonForm name='Sign Up'/>
        </div>
      </form>
      <p className={styles.noAccountText}>Already have an account? Access here!</p>
    </main>
    <BackgroundAnimated/>
    </>
  )
}
