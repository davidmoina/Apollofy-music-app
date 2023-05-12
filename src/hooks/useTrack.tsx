import { useNavigate } from 'react-router-dom';
import { FormInputsTrack } from '../components/ModalCreateTrack/ModalCreateTrack';

export function useTrack() {
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const navigate = useNavigate();

	const addTrack = async (data: FormInputsTrack | any) => {
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/track/create`, {
				method: 'POST',
				body: data,
			});

			await response.json();

			if (!response.ok) {
				return;
			}

			navigate('/library');
		} catch (error) {
			console.log(error);
		}
	};

	return {
		addTrack,
	};
}
