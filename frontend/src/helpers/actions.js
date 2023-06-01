import { toast } from 'react-hot-toast';
import ApiClient from '@/Classes/ApiClient';

const serverApi = process.env.NEXT_PUBLIC_API

const api = new ApiClient(serverApi);

export const Logout = async () => {
  window.localStorage.removeItem('user');
  try {
    const { data } = await api.get('/logout');
    toast.success(data?.message);
  } catch (error) {
    toast.error(error.message);
  }
};

export const Login = async (email, password) => {
  const data = await api.post('/login', { password, email });
  return data
}