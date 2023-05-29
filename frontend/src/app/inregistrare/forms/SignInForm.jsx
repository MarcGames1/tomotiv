'use client';
import React, { useState, useContext, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
// import { Link as DasyLink } from 'react-daisyui';
import { useRouter } from 'next/navigation';
import { Input, InputGroup } from 'react-daisyui';

import { Context } from '@/context';

import ApiClient from '@/Classes/ApiClient';
import Link from 'next/link';

const SignInForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  // state

  const { state, dispatch } = useContext(Context);

  const { user } = state;

  const formRef = useRef(null); // referința către elementul form

  const api = new ApiClient(process.env.NEXT_PUBLIC_API);
  const formHandler = {
   
    reset: () => {
      setEmail(null);
      setPassword(null);
      setLoading(false);
      formRef.current.reset();
    },

    sendData: async () => {
      const { data } = await api.post('/login', { password, email });

      if (data) {
        console.log('res => ', data);
        return data;
        // update the data variable with the response data
      } else {
        throw new Error('Ce PLM nu merge? ');
      }

      return data;
    },
    submit: async (e) => {
      e.preventDefault();
      try {
        setLoading(true);
        const data = await formHandler.sendData();
        console.log('data => ', data);
        dispatch({ type: 'LOGIN', payload: data });
        // save in localstorage
        window.localStorage.setItem('user', JSON.stringify(data));
        // redirect
        router.push('/');

        toast.success('Te-ai logat cu succes');
        setLoading(false);
        formHandler.reset();
      } catch (error) {
        if (error) {
          toast.error(error.message);
        }
        formHandler.reset();
      }
    },
  };

  const inputArgs = {
    className: 'w-full max-w-xs',
    bordered: true,
    color: 'secondary',
  };
  return (
    <>
      <form
        onSubmit={formHandler.submit}
        ref={formRef}
        autoComplete="off"
        className="flex flex-col items-center"
      >
        <div className="form-control w-full max-w-xs">
          <label htmlFor="email" className="label">
            <span className="label-text">Adresa de Email</span>
          </label>
          <Input
            required
            onInput={(e) => setEmail(e.target.value.toLowerCase())}
            name="email"
            type="email"
            {...inputArgs}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label gtmlFor="password" className="label">
            <span className="label-text">Parola </span>
          </label>
          <Input
            required
            onInput={(e) => setPassword(e.target.value.toLowerCase())}
            name="password"
            type="password"
            {...inputArgs}
          />
        </div>
        <button
          onSubmit={formHandler.submit}
          type="submit"
          className="btn btn-primary text-base-100 m-5"
        >
          Inregistreaza-te!
        </button>

        <div className="block m-auto prose  text-secondary">
          Nu ai cont?{' '}
          <Link className="link link-primary" href={'/login'}>
            Inregistreaza-te!
          </Link>{' '}
        </div>
        <div className="block m-auto prose  text-secondary">
          <Link className="link link-primary" href={'/forgot-password'}>
            Mi-am uitat Parola!
          </Link>{' '}
        </div>
      </form>
    </>
  );
};

export default SignInForm;