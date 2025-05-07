import { useQuery } from '@tanstack/react-query';
import { products } from '../services/api';

export const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: products,
  });
};