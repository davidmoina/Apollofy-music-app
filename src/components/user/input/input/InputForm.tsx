import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import { FormInputs } from '../../../../interfaces';
import styles from './input.module.scss';
import { FormInputsTrack } from '../../../ModalCreateTrack/ModalCreateTrack';

type InputProps = {
	inputType: string;
	id: Path<FormInputs>;
	placeholder: string;
	register: UseFormRegister<FormInputs>;
	errors: FieldErrors;
	required?: boolean;
};

export const InputForm = ({
	inputType,
	id,
	placeholder,
	register,
	errors,
	required,
}: InputProps) => {
	return (
		<div className={styles.inputWrapper}>
			<input
				{...register(id, { required })}
				type={inputType}
				id={id}
				className={styles.formInput}
				placeholder={placeholder}
				autoComplete='given-name'
			/>
			<label htmlFor={id} className={styles.formLabel}>
				{placeholder}
			</label>
			{errors[id] && (
				<span className={styles.errorMsg}>{placeholder} is required*</span>
			)}
		</div>
	);
};
