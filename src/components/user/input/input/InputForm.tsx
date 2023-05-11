import { UseFormRegister, Path, FieldErrors } from 'react-hook-form';
import { FormInputs } from '../../../../interfaces';
import styles from './input.module.scss';

type InputProps = {
	inputType: string;
	id: Path<FormInputs>;
	placeholder: string;
	register: UseFormRegister<FormInputs>;
	errors: FieldErrors;
	required?: boolean;
	defaultValue?: string;
};

export const InputForm = ({
	inputType,
	id,
	placeholder,
	register,
	errors,
	required,
	defaultValue,
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
				defaultValue={defaultValue}
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
