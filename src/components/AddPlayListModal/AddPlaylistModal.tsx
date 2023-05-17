import { SubmitHandler, useForm } from 'react-hook-form';
import { InputForm } from '../User/input/input/InputForm';
import styles from './addPlaylistModal.module.scss';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../User/input/button/ButtonForm';
import { useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Playlist } from '../../interfaces/playlist';

interface Props {
	closeModal: () => void;
}

export const AddPlaylistModal = ({ closeModal }: Props) => {
	const {
		handleSubmit,
		register,
		// formState: { errors },
	} = useForm<FormInputs>();

	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<FormInputs> = async data => {
		const user = localStorage.getItem('User');

		if (!user) {
			throw new Error('No user registered');
		}

		const userId = JSON.parse(user).id;

		if (!formRef.current) {
			throw new Error('No Data');
		}

		const newFormData = new FormData(formRef.current);
		newFormData.append('userId', userId);

		const toastId = toast.loading(`Creating ${data.playlistName} playlist`);

		try {
			const response = await fetch(
				`${import.meta.env.VITE_APP_SERVICE_URL}/playlist`,
				{
					method: 'POST',
					body: newFormData,
				}
			);

			const result: Playlist<string> = await response.json();

			toast.success(`Playlist ${result.name} created`, {
				id: toastId,
			});
		} catch (error) {
			toast.error((error as Error).message, {
				id: toastId,
			});
			console.log(error);
		}

		closeModal();
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
					required
					validations={{
						required: true,
					}
				}
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
