import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<T[]>([]);
	const [error, setError] = useState<string>('');

	useEffect(() => {
		(async () => {
			setLoading(true);
			try {
				const response = await fetch(url);
				const result = await response.json();

				setData(result.data);
			} catch (error) {
				setError((error as Error).message);
			}
			setLoading(false);
		})();
	}, []);

	return { loading, data, error };
};
