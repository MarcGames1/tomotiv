import { toast } from 'react-hot-toast';
import ApiClient from '@/Classes/ApiClient';


const api = new ApiClient('http://localhost:3000/api');

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
  const api = new ApiClient('http://localhost:3000/api');
  
  const data = await api.post('/login', { password, email });
  return data
}