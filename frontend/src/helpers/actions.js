import { toast } from 'react-hot-toast';
import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.API)

export const Logout = async () => {
  window.localStorage.removeItem('user');
  try {
    const { data } = await api.get('/logout');
    toast.success(data?.message);
  } catch (error) {
    toast.error(error.message);
  }
};
