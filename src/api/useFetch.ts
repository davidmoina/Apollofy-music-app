import { useContext, useEffect, useState } from 'react';
import { FavSongContext } from '../context/FavSongsContext/FavSongsContext';

export const useFetch = <T>(url: string) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<string>('');
	const [reload, setReload] = useState<boolean>(false);

	const { reloadPlaylist } = useContext(FavSongContext);

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
	}, [reload, reloadPlaylist]);

	return { loading, data, error, reload, setReload };
};
