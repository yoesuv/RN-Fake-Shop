import { ProductResponse } from '@/models';
import { useQuery } from '@tanstack/react-query';
import { products } from '../services/api';

export const useProducts = () => {
  return useQuery<ProductResponse[], Error>({
    queryKey: ['products'],
    queryFn: products,
  });
};