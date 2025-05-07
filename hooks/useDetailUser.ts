import { UserResponse } from '@/models';
import { useQuery } from '@tanstack/react-query';
import { detailUsers } from '../services/api';

export const useProducts = () => {
  return useQuery<UserResponse, Error>({
    queryKey: ['detailUsers'],
    queryFn: detailUsers,
  });
};