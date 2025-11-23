import { useState, useEffect } from "react";

// manages 'data', 'loading, 'error'
function useFetch(url: string | null) {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // if no URL provided, do nothing
    if (!url) return;

    // async function that performs the actual fetch
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        const result = await response.json();

        // if (!response.ok) {
        //   throw new Error(`HTTP error: ${response.status}`);
        // }

        // save the data
        setData(result);
      } catch (err: any) {
        // save the error message/ fallback message
        setError(err?.message ?? "Something went wrong.");
      } finally {
        // stop loading
        setLoading(false);
      }
    };
    // call the async function
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
