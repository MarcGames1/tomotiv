'use client';
import React, { useState, useEffect ,useContext, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import {Link as DasyLink} from 'react-daisyui';
import { useRouter } from 'next/navigation';
import { Input, InputGroup } from 'react-daisyui';

import { Context } from '@/context';

import ApiClient from '@/Classes/ApiClient'
import Link from 'next/link';

const SignUpForm = () => {
  const [nume, setNume] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const {
    state: { user },
  } = useContext(Context);

  const router = useRouter();

  const formRef = useRef(null);

  const api = new ApiClient(process.env.NEXT_PUBLIC_API);
  const formHandler = {
    nume: (e) => {
      setNume(e.target.value);
    },
    parola: (e) => {
      setPassword(e.target.value);
    },
    email: (e) => {
      setEmail(e.target.value);
    },
    reset: () => {
      setNume(null);
      setEmail(null);
      setPassword(null);
      setLoading(false);
      formRef.current.reset();
    },
    
    sendData: async () => {
      
      let data = {};
      const res = await api.post(`/register`, {
        nume,
        password,
        email,
      });

      console.log('res => ', res);
      console.log('caught:::', JSON.stringify(response, null, 2));
      if (res) {
        data = res.data; // update the data variable with the response data
      }
      return data;
    },
    submit: async (e) => {
      e.preventDefault();
      const data = await formHandler.sendData();
      try {
        setLoading(true);
        await console.log(data);
        if(data?.message){

          toast.error(data.message)
          formHandler.reset()
          throw new Error(data.message)
        } else{
          toast.success('te-ai inregistrat cu succes');
          setLoading(false);
          formHandler.reset();
        }

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

   useEffect(() => {
     if (user !== null) {
       router.push('/');
     }
   }, [user]);

  return (
    <>
      <form
        onSubmit={formHandler.submit}
        ref={formRef}
        className="flex flex-col items-center"
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Numele tau</span>
          </label>
          <Input
            onInput={formHandler.nume}
            name="nume"
            type="text"
            {...inputArgs}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Adresa de Email</span>
          </label>
          <Input onInput={formHandler.email} name="email" type="email" {...inputArgs} />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Parola </span>
          </label>
          <Input
            onInput={formHandler.parola}
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
          Ai deja cont? Logeaza-te{' '}
          <Link className="link link-primary" href={'/login'}>
            aici
          </Link>{' '}
        </div>
      </form>
    </>
  );
};

export default SignUpForm;
