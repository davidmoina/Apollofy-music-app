import { useEffect, useState } from "react";
import { Track } from "../interfaces/songs";

export const useFetch = (url: string) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Track[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();

        setData(result.data);
      } catch (error) {
        setError("error");
      }
      setLoading(false);
    })();
  }, []);

  return { loading, data, error };
};
