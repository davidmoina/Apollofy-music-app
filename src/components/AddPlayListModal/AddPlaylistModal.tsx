import { useForm } from 'react-hook-form';
import { InputForm } from '../user/input/input/InputForm';
import styles from './addPlaylistModal.module.scss';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../user/input/button/ButtonForm';
import { toast } from 'react-hot-toast';

export const AddPlaylistModal = () => {
	const {
		handleSubmit,
		register,
		reset,
		// formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit = async (data: FormInputs) => {
		console.log(data);
		const toastId = toast.loading('Loading');
		try {
			const response = await fetch(
				`${import.meta.env.VITE_APP_SERVICE_URL}/playlist`,
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify(data),
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
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputForm
				id='playlistName'
				inputType='text'
				register={register}
				placeholder='Playlist name'
				validations={{
					required: true,
				}}
			></InputForm>
			<textarea
				placeholder='Playlist Description'
				className={styles.textArea}
				{...register('playlistDescription')}
			></textarea>
			<ButtonForm name='Create playlist' />
		</form>
	);
};
