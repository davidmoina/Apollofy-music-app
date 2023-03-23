import { useEffect, useState } from "react";

export const useFetch = (url: string) => {

  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {

    (async() => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();

        setData(result);

      } catch (error) {
        setError("error")
      }
      setLoading(false);
    })();

}, []);

  return {loading, data, error}
}
