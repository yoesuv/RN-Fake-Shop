import { UserResponse } from '@/models';
import { useQuery } from '@tanstack/react-query';
import { detailUsers } from '../services/api';

export const useDetailUser = () => {
  return useQuery<UserResponse, Error>({
    queryKey: ['detailUsers'],
    queryFn: detailUsers,
  });
};