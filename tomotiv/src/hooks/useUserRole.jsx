import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';


const useUserRole = (role) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);


  const router = useRouter();


  useEffect(() => {
    const fetchData = async () => {
      try {
        let res;
        switch (role) {
          case 'Admin':
            res = await axios.get('/api/current-admin');
            break;
          case 'Instructor':
            res = await axios.get('/api/current-instructor');
            break;
          case 'Subscriber':
            res = await axios.get('/api/current-user');
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

  if(!ok){
    return <div>NU ai acces aici</div>
  }
  // Verificam daca utilizatorul are rolul necesar
  if (typeof window !== 'undefined' && !ok) {
    
    // Facem redirect catre pagina principala
    router.push('/');
  }

  return { ok, data, loading };
};

export default useUserRole;
