// import { useEffect, useState } from "react";

// export function useFetch(url: any) {
//   const [data, setdata] = useState({});
//   const [isLoading, setLoading] = useState(true);
//   const [error, setError] = useState(false);

//   const API_KEY: String = "vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo&feed";

//   useEffect(() => {
//     if (!url) return;
//     async function fetchData() {
//       try {
//         const response = await fetch(url + API_KEY);
//         const data = await response.json();
//         setdata(data);
//       } catch (err) {
//         console.log(err);
//         setError(true);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchData();
//   }, [url]);

//   return { isLoading, data, error };
// }

import { useEffect, useState } from "react";

export function useFetch(url: any) {
  const [data, setData] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // Clé API de la NASA
  const API_KEY: string = "vciOjhLYjZK99S51sNTtGgc7RL1sRngwn65IGKUo";

  useEffect(() => {
    if (!url) return;

    async function fetchData() {
      try {
        const response = await fetch(`${url}api_key=${API_KEY}`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, API_KEY]);

  return { isLoading, data, error };
}
