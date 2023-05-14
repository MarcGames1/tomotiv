import useUserRole from "../hooks/useUserRole";
import React, {useEffect, useState} from "react";
import {useRouter} from "next/router";



const AdminRoutes = ({Component, pageProps}) =>{
     const { ok, data, loading } = useUserRole('Admin');


      const router = useRouter();
      const [seconds, setSeconds] = useState(3);

      useEffect(() => {
        const interval = setInterval(() => {
          setSeconds((prevSeconds) => (seconds !== 0 ? prevSeconds - 1 : 0));
        }, 1000);

        return () => clearInterval(interval);
      }, []);

      useEffect(() => {
        if (seconds === 0) {
          router.push('/');
        }
      }, [seconds]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ok) {
    return <div>Nu ai rol de Administrare! Te vom redirectiona in {seconds} secunde </div>;
  }

  return <Component {...pageProps} />;
};

export default AdminRoutes
