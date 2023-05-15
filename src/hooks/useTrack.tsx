import { useNavigate } from 'react-router-dom';
import { FormInputs } from '../interfaces';

export function useTrack() {
	const { VITE_APP_SERVICE_URL } = import.meta.env;
	const navigate = useNavigate();

	const addTrack = async (data: FormInputs | any) => {
		const { id } = JSON.parse(localStorage.getItem('User')!);
		try {
			const response = await fetch(
				`${VITE_APP_SERVICE_URL}/track/create/${id}`,
				{
					method: 'POST',
					body: data,
				}
			);

			await response.json();

			if (!response.ok) {
				return;
			}

			navigate('/library');
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTrack = async (trackId: string) => {
		const { id } = JSON.parse(localStorage.getItem('User')!);
		console.log('userId:', id);
		try {
			const response = await fetch(
				`${VITE_APP_SERVICE_URL}/track/${trackId}/${id}`,
				{
					method: 'DELETE',
				}
			);

			console.log(await response.json());

			if (!response.ok) {
				throw new Error('Something went wrong');
			}
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	const getTrackOfUser = async () => {
		const { id } = JSON.parse(localStorage.getItem('User')!);

		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/track/${id}`, {
				method: 'GET',
			});

			const json = await response.json();

			if (!response.ok) {
				throw new Error('Something went wrong');
			}
			return json.data;
		} catch (error) {
			console.log((error as Error).message);
		}
	};

	return {
		addTrack,
		deleteTrack,
		getTrackOfUser,
	};
}
