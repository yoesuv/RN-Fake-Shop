import { useMutation } from '@tanstack/react-query';
import { LoginResponse } from '../models';
import { login } from '../services/api';

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    onSuccess: (data: LoginResponse) => {
      console.log('Hooks # Login successful, token:', data.token);
    },
    onError: (error: Error) => {
      console.error('Hooks # Login failed:', error.message);
    },
  });
};