import { useTrack } from '../../hooks/useTrack';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useState, useContext, useRef } from 'react';

export type FormInputsTrack = {
	name: string;
	artists: string[];
	albums: string;
	genre: string;
	duration: number;
	thumbnail: string;
	url: string;
};

export const ModalCreateTrack = () => {
	const { addTrack } = useTrack();
	const { register, handleSubmit, reset } = useForm<FormInputsTrack>();

	const formRef: any = useRef();

	const onSubmit: SubmitHandler<FormInputsTrack | any> = async () => {
		const formData: any = new FormData(formRef.current);

		await addTrack(formData);
		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				ref={formRef}
				encType='multipart/form-data'
			>
				<input
					type='text'
					placeholder='Insert title of the track'
					{...register('name')}
				/>
				<br />
				<br />
				<input
					type='text'
					placeholder='Insert artists of the track'
					{...register('artists')}
				/>
				<br />
				<br />
				<br />
				<br />
				<input
					type='text'
					placeholder='Insert genre of the track'
					{...register('genre')}
				/>
				<br />
				<br />
				<input
					type='text'
					placeholder='Insert duration of the track'
					{...register('duration')}
				/>
				<br />
				<br />
				<label>Insert image of the track</label>
				<br />
				<input
					type='file'
					placeholder='Insert image of the track'
					{...register('thumbnail')}
				/>
				<br />
				<br />
				<label>Insert mp3 of the track</label>
				<br />
				<input
					type='file'
					placeholder='Insert mp3 of the track'
					{...register('url')}
				/>
				<br />
				<br />
				<button type='submit'>Add Song</button>
			</form>
		</>
	);
};
