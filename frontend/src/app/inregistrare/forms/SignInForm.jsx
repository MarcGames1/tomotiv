'use client';
import React, { useState, useContext, useRef } from 'react';
import toast from 'react-hot-toast';
// import { Link as DasyLink } from 'react-daisyui';
import { useRouter } from 'next/navigation';
import { Input } from 'react-daisyui';
import { Context } from '@/context';
import {Button} from 'react-daisyui';

import Link from 'next/link';
import { Login } from '@/helpers/actions';





const SignInForm = ({callback = () =>{}, redirect=true}) => {
  const router = useRouter();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false);

  // state

  const { state, dispatch } = useContext(Context);

  const { user } = state;

  const formRef = useRef(null); // referința către elementul form

  
  const formHandler = {
   
    reset: () => {
      setEmail(null);
      setPassword(null);
      setLoading(false);
      formRef.current.reset();
     
    },

    sendData: async () => {
      // const data  = await api.post('/login', { password, email });
      // console.log('SEND DATA METHOD Returned =>', await data)
      // return await data;
      try {
        return await Login(email, password)
        
      } catch (error) {
        console.log(error)
      }
      
    },

          
    submit: async (e) => {
      e.preventDefault();
     

    
      try {
        setLoading(true);
        const data = await formHandler.sendData();
          if (data?.error) {
            toast.error(data.error);
            return;
          } 
         else if(data && data?._id){
            console.log('data => ', data);
            dispatch({ type: 'LOGIN', payload: data });
            
            // save in localstorage
            window.localStorage.setItem('user', JSON.stringify(data));
            // redirect or callback
            if(redirect){
              router.push('/');
            } else {
              callback()
            }
            
            toast.success('Te-ai logat cu succes');
            setLoading(false);
          }
          else{
            toast.error("EROARE!")
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
            onInput={(e) => {
              setEmail(e.target.value.toLowerCase()) 
              console.log('Email Changed,', email)
            }}
            name="email"
            type="email"
            {...inputArgs}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="password" className="label">
            <span className="label-text">Parola </span>
          </label>
          <Input
            required
            onInput={(e) => {
              setPassword(e.target.value)
              console.log('Password Changed,', password)
            }}
            name="password"
            type="password"
            {...inputArgs}
          />
        </div>
        <Button
          loading={loading}
          onSubmit={formHandler.submit}
          type="submit"
          className="btn btn-primary text-base-100 m-5"
        >
          Logheaza-te!
        </Button>

        <div className="block m-auto prose  text-secondary">
          Nu ai cont?{' '}
          <Link className="link link-primary" href={'/inregistrare'}>
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
