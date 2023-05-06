import { useRouter } from 'next/router';
import React, { useState, useRef, useContext, useEffect } from 'react';
import { tw } from 'twind';
import axios from 'axios';
import toast from 'react-hot-toast';
import { LoadingSpinner } from '..';

import { colors } from '@/helpers/styles';
import { form as formStyles } from '@/helpers/styles';

import { Context } from '@/context';
import Link from 'next/link';

const LogInForm = () => {
  const sendData = async () => {
    let data = {};
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`, {
      email,
      password,
      
    });

    
    console.log('res => ', res);
    if (res) {
      data = res.data; // update the data variable with the response data
    }
    return data;
  };

  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  // state 

  const {state, dispatch} = useContext(Context)

  const {user} = state

  const formRef = useRef(null); // referința către elementul form

  const resetState = () => {
   
    setEmail(null);
    setPassword(null);
    setLoading(false);

    formRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const data = await sendData();
      dispatch({type: "LOGIN", payload: data})
      // save in localstorage
      window.localStorage.setItem('user', JSON.stringify(data))
      // redirect
      router.push('/user')

      toast.success('Te-ai logat cu succes');
      setLoading(false);
      resetState();
    } catch (error) {
      if (error) {
        toast.error(error.message);
      }
      resetState();
    }
  };


  useEffect(() => {
    if (user !== null) {
      router.push('/');
    }
  }, [user]);


  return (
    <div className={tw('self-center sm: w-full lg:w-1/3')}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="Formular Contact"
        className={formStyles.form}
      >
        <label className={formStyles.label} htmlFor="email">
          Email
        </label>
        <input
          className={formStyles.input}
          required
          type="email"
          name="email"
          onInput={(e) => setEmail(e.target.value.toLowerCase())}
        />

        <label className={formStyles.label} htmlFor="password">
          Parola
        </label>
        <input
          className={formStyles.input}
          type="password"
          name="password"
          required
          onInput={(e) => setPassword(e.target.value)}
        />

        <button
          disabled={ !email || !password || loading}
          className={formStyles.button}
          type="submit"
        >
          {!loading && 'TRIMITE'}
          {loading && <LoadingSpinner color={colors.crelaRoz} message="" />}
        </button>
      </form>
      <p>Ti-ai uitat Parola?</p><Link href="/reset-password">Reseteaza-ti Parola</Link>
    </div>
  );
};

export default LogInForm;
