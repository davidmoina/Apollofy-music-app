export function useRol() {
	const { VITE_APP_SERVICE_URL } = import.meta.env;

	const getAllRols = async () => {
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/rol`, {
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

	const getUsersByRol = async (id: string | undefined) => {
		try {
			const response = await fetch(`${VITE_APP_SERVICE_URL}/rol/${id}`, {
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
		getAllRols,
		getUsersByRol,
	};
}
