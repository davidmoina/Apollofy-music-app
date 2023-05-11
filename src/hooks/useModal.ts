import { useState } from 'react';

export const useModal = (initialValue = false) => {
	const [isOpen, setIsOpen] = useState<boolean>(initialValue);

	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	return { isOpen, openModal, closeModal };
};
