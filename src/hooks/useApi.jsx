import { useState } from 'react';
import axios from 'axios';

const useApi = (fetchCallback) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [api, setApi] = useState(() => fetchCallback);

  const fetchData = async (...args) => {
    console.log(args, api)
    setLoading(true);
    try {
      const data = await api(...args);
      setData(data);
      setError(null);
    } catch (error) {
      setError(error);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  const switchApi = (newApi) => {
    setApi(newApi);
  };

  return { data, loading, error, fetchData, switchApi};
};

export default useApi
