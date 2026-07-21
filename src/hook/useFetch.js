import { useEffect, useState } from "react";

function useFetch(url, dataKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
       

        setData(result[dataKey]);
      } catch (err) {
        setData(null);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, dataKey]);

  return { data, loading, error };
}

export default useFetch;