import { FormInputs, PlaylistInputs } from '../../interfaces';
import styles from './inputSelect.module.scss';
import { UseFormRegister, Path, RegisterOptions } from 'react-hook-form';

interface Props {
	id: Path<FormInputs>;
	validations?: RegisterOptions;
	register: UseFormRegister<FormInputs | PlaylistInputs>;
	placeholder?: string;
	options: string[];
}

export const InputSelect = ({
	register,
	id,
	validations,
	placeholder,
	options,
}: Props) => {
	return (
		<div className={styles.select}>
			<select {...register(id, validations)}>
				{options.map(item => (
					<option key={item} value={item}>
						{item.charAt(0).toUpperCase() + item.slice(1)}
					</option>
				))}
			</select>
			<i></i>
		</div>
	);
};
