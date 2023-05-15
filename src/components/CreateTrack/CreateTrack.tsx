import { useRef } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { FormInputs } from '../../interfaces/index';
import { useTrack } from '../../hooks/useTrack';
import { InputForm } from '../user/input/input/InputForm';
import { ButtonForm } from '../user/input/button/ButtonForm';
import stylesInput from '../user/input/input/input.module.scss';

export const CreateTrack = () => {
	const { addTrack } = useTrack();
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm<FormInputs>();

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
					validations={{
						required: true,
					}}
				>
					{errors.artists?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					id='genre'
					placeholder='genre'
					inputType='text'
					register={register}
					validations={{
						required: true,
					}}
				>
					{errors.genre?.type === 'required' && (
						<span className='errorMessage'>Field required</span>
					)}
				</InputForm>
				<InputForm
					id='albums'
					placeholder='Name Album'
					inputType='text'
					register={register}
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
