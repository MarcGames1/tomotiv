import { toast } from 'react-hot-toast';
import ApiClient from '@/Classes/ApiClient';


const api = new ApiClient('http://localhost:8000/api');

export const Logout = async () => {
  window.localStorage.removeItem('user');
  try {
    const  data  = await api.get('/logout');
    toast.success(data?.message);
  } catch (error) {
    toast.error(error.message);
  }
};

export const Login = async (email, password) => {
  
  
  const data = await api.post('/login', { password, email });
  return data
}

export const currencyFormatter = (data) => {
  return ((data.amount * 100) / 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });
};

export const stripeCurrencyFormatter = (data) => {
  return (data.amount / 100).toLocaleString(data.currency, {
    style: 'currency',
    currency: data.currency,
  });
};