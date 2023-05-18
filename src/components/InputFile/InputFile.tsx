import { FormInputs, PlaylistInputs } from '../../interfaces';
import styles from './inputFile.module.scss';
import { UseFormRegister, Path, RegisterOptions } from 'react-hook-form';

interface Props {
	id: Path<FormInputs>;
	validations?: RegisterOptions;
	register: UseFormRegister<FormInputs | PlaylistInputs>;
	placeholder: string;
}

export const InputFile = ({
	id,
	validations,
	register,
	placeholder,
}: Props) => {
	return (
		<div className='my-4'>
			<p className={styles.fileText}>{placeholder}</p>
			<input
				{...register(id, validations)}
				className={styles.inputFile}
				type='file'
				id={id}
				accept='image/*'
			></input>
		</div>
	);
};
