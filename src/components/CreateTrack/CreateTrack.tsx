import { useEffect, useRef, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from '../../interfaces/index';
import { useTrack } from '../../hooks/useTrack';
import { InputForm } from '../User/input/input/InputForm';
import { ButtonForm } from '../User/input/button/ButtonForm';
import stylesInput from '../user/input/input/input.module.scss';
import { Genre } from '../../interfaces/songs';
import { useGenre } from '../../hooks/useGenre';

export const CreateTrack = () => {
	const { addTrack } = useTrack();
	const [genres, setGenres] = useState<Genre[]>([]);
	const { getAllGenres } = useGenre();

	useEffect(() => {
		const fetchGenres = async () => {
			try {
				const genresData = await getAllGenres();
				setGenres(genresData);
			} catch (error) {
				console.log(error);
			}
		};

		fetchGenres();
	}, []);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>();

	const { register: register2 } = useForm();

	const formRef = useRef<HTMLFormElement | null>(null);

	const onSubmit: SubmitHandler<FormInputs> = async () => {
		const formData = new FormData(formRef.current!);
		await addTrack(formData);
		reset();
	};

	return (
		<>
			<form
				onSubmit={handleSubmit(onSubmit)}
				ref={formRef}
				encType='multipart/form-data'
				className={stylesInput.form}
			>
				<InputForm
					id='name'
					placeholder='name'
					inputType='text'
					register={register}
					required
					validations={{
						required: true,
					}}
				>
					{errors.name?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					id='artists'
					placeholder='artists'
					inputType='text'
					register={register}
					required
					validations={{
						required: true,
					}}
				>
					{errors.artists?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<div style={{ marginTop: '-2rem' }}>
					<label
						style={{ color: 'rgba(123, 88, 228, 0.7)', fontWeight: 'bold' }}
					>
						Genre
					</label>
					<br />
					<select
						id='genre'
						{...register2('genre')}
						style={{
							backgroundColor: 'rgb(34, 31, 46)',
							width: '50%',
							marginTop: '0.5rem',
							marginBottom: '2rem',
							padding: '0.5rem',
							border: '1px solid #8f85ad',
							borderRadius: '5px',
						}}
					>
						{genres.map(genre => (
							<option key={genre.name} value={genre.name}>
								{genre.name}
							</option>
						))}
					</select>
				</div>

				<InputForm
					id='albums'
					placeholder='Name Album'
					inputType='text'
					register={register}
					required
					validations={{
						required: false,
					}}
				>
					{errors.thumbnail?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					id='duration'
					placeholder='duration'
					inputType='time'
					register={register}
					required
					validations={{
						required: true,
					}}
				>
					{errors.duration?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					id='thumbnail'
					placeholder='image'
					inputType='file'
					register={register}
					required
					validations={{
						required: true,
					}}
				>
					{errors.thumbnail?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<div id='src-file1'></div>
				<InputForm
					id='url'
					placeholder='Song'
					required
					inputType='file'
					register={register}
					validations={{
						required: true,
					}}
				>
					{errors.url?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<div />
				<ButtonForm name='Add Song' />
			</form>
		</>
	);
};
