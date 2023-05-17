export function useGenre() {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const getAllGenres = async () => {
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/genre`, {
				method: 'GET',
			});

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const json = await response.json();
			return json.data;
		} catch (error) {
			throw new Error((error as Error).message);
		}
	};

	const getTracksByGenre = async (id: string | undefined) => {
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/genre/${id}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			if (!response.ok) {
				throw new Error('Something went wrong');
			}

			const json = await response.json();
			return json.data;
		} catch (error) {
			throw new Error((error as Error).message);
		}
	};

	return {
		getAllGenres,
		getTracksByGenre,
	};
}
