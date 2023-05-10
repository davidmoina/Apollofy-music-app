import { useForm } from 'react-hook-form';
import { InputForm } from '../user/input/input/InputForm';
import styles from './addPlaylistModal.module.scss';
import { FormInputs } from '../../interfaces';
import { ButtonForm } from '../user/input/button/ButtonForm';

export const AddPlaylistModal = () => {
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm<FormInputs>();

	const onSubmit = (data: any) => {
		console.log(data);
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
