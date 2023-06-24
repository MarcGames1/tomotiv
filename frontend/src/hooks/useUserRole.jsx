'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Logout } from '@/helpers/actions';
import { Context } from '@/context';

const useUserRole = (role) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { state, dispatch } = useContext(Context);
  
const router = useRouter()
  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        switch (role) {
          case 'Admin':
            res = await axios.get(
              `${process.env.NEXT_PUBLIC_API}/current-admin`
            );
            break;
          case 'Instructor':
            res = await axios.get(
              `${process.env.NEXT_PUBLIC_API}/current-instructor`
            );
            break;
          case 'Subscriber':
            res = await axios.get(
              `${process.env.NEXT_PUBLIC_API}/current-user`
            );
            break;
          default:
            throw new Error(`Invalid role: ${role}`);
        }
        setData(res.data);
        
      } catch (error) {
        console.error(error);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [role]);

  const ok = data !== null && data.ok;

     if (loading) {
       return (
         <div>
           <span className="loading loading-dots loading-xs"></span>
         </div>
       );
     }
  if (!ok) {
     dispatch({ type: 'LOGOUT' });
     router.push('/');
     Logout();
    return <div>NU ai acces aici</div>;
  }
  // Verificam daca utilizatorul are rolul necesar
  if (typeof window !== 'undefined' && !ok) {
    // Facem redirect catre pagina principala
    
  }

  return { ok, data, loading };
};

export default useUserRole;
