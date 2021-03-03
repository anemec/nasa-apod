import { useEffect, useState, useRef } from 'react';

const useFetch = (url) => {
  const cache = useRef({});
  const [status, setStatus] = useState('idle');
  const [data, setData] = useState([]);

  useEffect(() => {
    if (!url) return;
    const getData = async () => {
      setStatus('fetching');
      if (cache.current[url]) {
        setData(cache.current[url]);
        setStatus('fetched');
      } else {
        const response = await fetch(url);
        const result = await response.json();
        cache.current[url] = result;
        setData(result);
        setStatus('fetched');
      }
    };
    getData();
  }, [url]);
  return [status, data];
};

export default useFetch;
