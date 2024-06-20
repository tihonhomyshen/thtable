import { useState } from 'react';

import { getItemsSkinport } from '../services/getItemsSkinport';
import { getItemsTM } from '../services/getItemsTM';

export const SERVICE_NAMES = {
  TM: 'TM',
  SKINPORT: 'SKINPORT',
}

const SERVICES = {
  [SERVICE_NAMES.TM]: getItemsTM,
  [SERVICE_NAMES.SKINPORT]: getItemsSkinport,
}

const useApi = (initialService) => {
  const [currentService, setCurrentService] = useState(initialService)

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cachedParams, setCachedParams] = useState()

  const fetchData = async (params, newService) => {
    if (newService || currentService) {
      try {
        const data = await SERVICES[newService || currentService](params ? { ...params } : { ...cachedParams })

        setData(data)
        setError(null)
      } catch (e) {
        setError(e)
        setData([])
      } finally {

        if (params) {
          setCachedParams(params)
        }
        setLoading(false)
      }
    }
  }

  const switchApi = (service) => {
    setCurrentService(service);
    fetchData(undefined, service)
  };

  return { data, loading, error, fetchData, switchApi, service: currentService };
};

export default useApi
