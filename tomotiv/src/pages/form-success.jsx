import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Page from '../components/Page'
import Head from 'next/head';

 function FormSuccess() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
   const interval = setInterval(() => {
     setSeconds((prevSeconds) => seconds !== 0 ? prevSeconds - 1 : 0 );
   }, 1000);

   return () => clearInterval(interval);
  }, []);

   useEffect(() => {
     if (seconds === 0) {
       router.push('/');
     }
   }, [seconds]);

  return (
    <Page>
      <Head>
        <meta name="robots" content="noindex, follow" />
        <title>Formular Completat Cu Succes</title>
      </Head>
      <div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl  text-center">
          Mulțumim pentru mesaj! Veți fi redirecționat în {seconds} secunde.
        </h1>
      </div>
    </Page>
  );
}


export default FormSuccess