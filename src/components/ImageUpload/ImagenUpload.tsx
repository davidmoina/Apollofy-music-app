import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import useUserAuth from '../../hooks/useUserAuth';
import { FormInputs } from '../../interfaces/index';
import styles from './imagenUpoload.module.scss';

export const ImagenUpload = () => {
	const { uploadImageUser } = useUserAuth();
	const formRef = useRef<HTMLFormElement | null>(null);

	const onSubmit: SubmitHandler<FormInputs> = async () => {
		const formData = new FormData(formRef.current!);
		await uploadImageUser(formData);
	};

	const { register, handleSubmit } = useForm<FormInputs>();

	return (
		<div className=''>
			<form
				onSubmit={handleSubmit(onSubmit)}
				ref={formRef}
				encType='multipart/form-data'
			>
				<div className={`flex items-center gap-1 `}>
					<div className={styles.divInput}>
						<input type='file' id='thumbnail' {...register('thumbnail')} />
					</div>
					<button className={` ${styles.buttonUp}`}>Save</button>
				</div>
			</form>
		</div>
	);
};
