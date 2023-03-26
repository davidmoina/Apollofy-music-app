import styles from '../LoginPage/loginPage.module.scss'
import { InputForm } from '../../components/user/input/input/InputForm';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../../components/user/input/button/ButtonForm';




export const EditProfile = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log(data);
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Edit profile</h1>
            <div>
                <InputForm id='firstName' placeholder='Name' inputType='text' register={register} errors={errors} />
                <InputForm id='lastName' placeholder='Last Name' inputType='text' register={register} errors={errors} />
                <InputForm id='email' placeholder='Email' inputType='email' register={register} errors={errors} />
                <InputForm id='birthday' placeholder='Date of birth' inputType='date' register={register} errors={errors} />

            </div>

            <ButtonForm name='Save' />
        </form>
    )
}
