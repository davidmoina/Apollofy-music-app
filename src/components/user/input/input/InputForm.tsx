import { UseFormRegister, Path, RegisterOptions } from 'react-hook-form';
import { FormInputs } from '../../../../interfaces';
import styles from './input.module.scss';
import { ReactElement } from 'react';
import { FormInputsTrack } from '../../../ModalCreateTrack/ModalCreateTrack';

type InputProps = {
	children: ReactElement | boolean;
	inputType: string;
	id: Path<FormInputs>;
	placeholder: string;
	register: UseFormRegister<FormInputs>;
	validations: RegisterOptions;
	validate?: () => boolean;
};

export const InputForm = ({
	children,
	inputType,
	id,
	placeholder,
	register,
	validate,
	validations,
}: InputProps) => {
	return (
		<div className={styles.inputWrapper}>
			<input
				{...register(id, validations)}
				type={inputType}
				id={id}
				className={styles.formInput}
				placeholder={placeholder}
				autoComplete='given-name'
				onKeyUp={validate}
			/>
			<label htmlFor={id} className={styles.formLabel}>
				{placeholder}
			</label>
			{children}
		</div>
	);
};
