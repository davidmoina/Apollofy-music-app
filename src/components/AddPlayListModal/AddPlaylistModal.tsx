import { SubmitHandler, useForm } from 'react-hook-form';
import { InputForm } from '../user/input/input/InputForm';
import styles from './addPlaylistModal.module.scss';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../user/input/button/ButtonForm';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';

export const AddPlaylistModal = () => {
	const {
		handleSubmit,
		register,
		reset,
		// formState: { errors },
	} = useForm<FormInputs>();

	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<FormInputs> = async () => {
		const newFormData = new FormData(formRef.current!);

		const toastId = toast.loading('Loading');

		try {
			const response = await fetch(
				`${import.meta.env.VITE_APP_SERVICE_URL}/playlist`,
				{
					method: 'POST',
					body: newFormData,
				}
			);

			const result = await response.json();

			toast.success('This worked', {
				id: toastId,
			});
			console.log(result);
		} catch (error) {
			toast.error((error as Error).message, {
				id: toastId,
			});
			console.log(error);
		}

		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				ref={formRef}
				encType='multipart/form-data'
			>
				<InputForm
					id='playlistName'
					inputType='text'
					register={register}
					placeholder='Playlist name'
					validations={{
						required: true,
					}}
				></InputForm>
				<div className={styles.inputWrapper}>
					<textarea
						className={styles.textArea}
						{...register('playlistDescription')}
						id='description'
						placeholder='description'
						style={{ height: '100px' }}
					></textarea>
					<label className={styles.textLabel} htmlFor='description'>
						Description
					</label>
				</div>

				<div className={styles.inputWrapper}>
					<input
						{...register('thumbnail', { required: true })}
						className={styles.formInput}
						type='file'
					/>
					<label className={styles.formLabel}>Upload a song</label>
				</div>
				<ButtonForm name='Create playlist' />
			</form>
		</>
	);
};
