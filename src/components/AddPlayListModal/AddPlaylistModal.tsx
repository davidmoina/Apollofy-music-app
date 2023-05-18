import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './addPlaylistModal.module.scss';
import { PlaylistInputs } from '../../interfaces';
import { ButtonForm } from '../User/Button/ButtonForm';
import { useContext, useRef } from 'react';
import { toast } from 'react-hot-toast';
import { Playlist } from '../../interfaces/playlist';
import { InputForm } from '../User/Input/InputForm';
import { FavSongContext } from '../../context/FavSongsContext/FavSongsContext';

interface Props {
	closeModal: () => void;
	editId?: string;
}

export const AddPlaylistModal = ({ closeModal, editId }: Props) => {
	const { handleSubmit, register, reset } = useForm<PlaylistInputs>({
		defaultValues: async () => {
			if (!editId) {
				return {
					playlistName: '',
					playlistDescription: '',
				};
			}

			const response = await fetch(
				`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${editId}`
			);
			const result = await response.json();
			return {
				playlistName: result.data.name || '',
				playlistDescription: result.data.description || '',
			};
		},
	});

	const { playlistReloading } = useContext(FavSongContext);

	const formRef = useRef<HTMLFormElement>(null);

	const onSubmit: SubmitHandler<PlaylistInputs> = async data => {
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
			const response = editId
				? await fetch(
						`${import.meta.env.VITE_APP_SERVICE_URL}/playlist/${editId}`,
						{
							method: 'PATCH',
							body: newFormData,
						}
				  )
				: await fetch(`${import.meta.env.VITE_APP_SERVICE_URL}/playlist`, {
						method: 'POST',
						body: newFormData,
				  });

			const result: Playlist<string> = await response.json();

			toast.success(
				`Playlist ${result.name} ${editId ? 'edited' : 'created'}`,
				{
					id: toastId,
				}
			);
		} catch (error) {
			toast.error((error as Error).message, {
				id: toastId,
			});
			console.log(error);
		}

		reset();
		playlistReloading();
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
						{...register('thumbnail', { required: editId ? false : true })}
						className={styles.formInput}
						type='file'
					/>
					<label className={styles.formLabel}>Upload a song</label>
				</div>
				<ButtonForm name={editId ? 'Edit playlist' : 'Create playlist'} />
			</form>
		</>
	);
};
