import { useEffect, useState } from "react";

export function useFetch(url: any) {
  const [data, setdata] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const API_KEY: String = "vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo&feed";

  useEffect(() => {
    if (!url) return;
    async function fetchData() {
      try {
        const response = await fetch(url + API_KEY);
        const data = await response.json();
        setdata(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { isLoading, data, error };
}
