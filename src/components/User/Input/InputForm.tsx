import {
	UseFormRegister,
	Path,
	RegisterOptions,
	FieldErrors,
} from 'react-hook-form';
import { FormInputs, PlaylistInputs } from '../../../interfaces';
import styles from './input.module.scss';
import { HTMLInputTypeAttribute, ReactElement } from 'react';

type InputProps = {
	children?: ReactElement | boolean;
	inputType: HTMLInputTypeAttribute;
	id: Path<FormInputs>;
	placeholder: string;
	errors?: FieldErrors<FormInputs>;
	register: UseFormRegister<FormInputs | PlaylistInputs>;
	validations?: RegisterOptions;
	validate?: () => boolean;
	defaultValue?: string;
	required: boolean;
};

export const InputForm = ({
	children,
	inputType,
	id,
	placeholder,
	register,
	validate,
	validations,
	defaultValue,
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
				defaultValue={defaultValue}
			/>
			<label htmlFor={id} className={styles.formLabel}>
				{placeholder}
			</label>
			{children}
		</div>
	);
};
