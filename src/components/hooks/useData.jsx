import useSWR from 'swr';
import { fetcher } from '../utils/fetcher';

export const useData = (endpoint) => {
  const { data, error } = useSWR(endpoint, fetcher);
  
  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
}