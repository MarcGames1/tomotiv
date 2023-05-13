import { useState, useEffect } from 'react';
import axios from 'axios';

const useApi = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await axios(url, options);
      setData(response.data);
      setSuccess(true);
    } catch (error) {
      setError(error);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    fetchData();
  };

  return { data, loading, success, error, refetch };
};

export default useApi;
