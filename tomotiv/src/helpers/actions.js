import { toast } from 'react-hot-toast';
import axios from 'axios';

export const Logout = async () => {
  window.localStorage.removeItem('user');
  const { data } = await axios.get('/api/logout');
  toast.success(data.message);
};
