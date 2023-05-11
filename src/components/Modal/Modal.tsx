import { MouseEventHandler, ReactElement } from 'react';
import styles from './modal.module.scss';
import { AiFillCloseCircle } from 'react-icons/ai';

interface Props {
	children: ReactElement | ReactElement[];
	isOpen: boolean;
	closeModal: () => void;
}

export const Modal = ({ children, isOpen, closeModal }: Props) => {
	const handleModalClick: MouseEventHandler<HTMLDivElement> = e => {
		e.stopPropagation();
	};

	return (
		<article
			className={`${styles.modalContainer} ${isOpen && styles.modalOpen}`}
			onClick={closeModal}
		>
			<div className={styles.modalContent} onClick={handleModalClick}>
				<button onClick={closeModal} className={styles.modalClose}>
					<AiFillCloseCircle />
				</button>
				{children}
			</div>
		</article>
	);
};
