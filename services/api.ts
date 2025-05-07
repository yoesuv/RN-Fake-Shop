import axios from 'axios';
import { LoginRequest } from '../models';

const api = axios.create({
    baseURL: "https://fakestoreapi.com/",
    headers: {
      "Content-Type": "application/json",
    },
  });

export const login = async (login: LoginRequest) => {
    const response = await api.post('auth/login',login);
    return response.data;
};

export const products = async () => {
    const response = await api.get('/products');
    return response.data;
};