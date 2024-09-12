import { useEffect, useState } from "react";

const useFetch = (currency) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true); // Start loading
        let resp = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`);
        if (!resp.ok) {
          throw new Error('Network response was not ok');
        }
        let currencyData = await resp.json();
        setData(currencyData[currency]); // Update state with fetched data
      } catch (err) {
        setError(err); // Set error state
      } finally {
        setLoading(false); // Stop loading
      }
    };

    getData();
  }, [currency]); // Dependency array

  return data;
};

export default useFetch;