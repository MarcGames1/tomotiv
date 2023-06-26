'use client'
import React, {useState, useContext, useRef, useEffect} from "react";
import { useRouter } from "next/navigation";

import { Input, Button } from 'react-daisyui';
import {toast} from 'react-hot-toast'

import { Context } from "@/context";

import ApiClient from "@/Classes/ApiClient";


const FoggotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null); // referința către elementul form

  const api = new ApiClient(process.env.NEXT_PUBLIC_API);

  const resetState = () => {
    setEmail('');
    setCode('');
    setNewPassword('');
    formRef.current.reset();
  };

  // context
  const {
    state: { user },
  } = useContext(Context);
  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user !== null) router.push('/');
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { data } = await api.post('/forgot-password', { email });
      setSuccess(true);
      toast('Check your email for the secret code');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.message);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await api.post('/reset-password', {
        email,
        code,
        newPassword,
      });
      resetState();
      setLoading(false);
      toast('Parola a fost schimbata!');
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
      resetState();
    }
  };

   const inputArgs = {
     className: 'w-full max-w-xs',
     bordered: true,
     color: 'secondary',
   };


   
  return (
    <>
      <form
        className={`flex flex-col items-center`}
        ref={formRef}
        onSubmit={success ? handleResetPassword : handleSubmit}
      >
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Introdu Adresa ta de Email</span>
          </label>
          <Input
            onInput={(e) => setEmail(e.target.value)}
            name="email"
            type="email"
            required
            {...inputArgs}
          />
        </div>
        {success && (
          <>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">
                  Codul Trimis pe adresa ta de email:
                </span>
              </label>
              <Input
                onInput={(e) => setCode(e.target.value)}
                value={code}
                name="code"
                type="text"
                required
                {...inputArgs}
              />
            </div>
            {/* <input
              type="text"
              className={formStyles.input}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Enter secret code"
              required
            /> */}

            {/* <input
              type="password"
              className={formStyles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="New Password"
              autoComplete="off"
              required
            /> */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Parola </span>
              </label>
              <Input
                onInput={(e) => setNewPassword(e.target.value)}
                value={newPassword}
                name="password"
                type="password"
                required
                {...inputArgs}
              />
            </div>
          </>
        )}

        <button
          type="submit"
          className="btn btn-primary text-base-100 m-5"
          disabled={loading || !email}
        >
          {loading ? (
            <span className="loading loading-dots loading-lg"></span>
          ) : (
            'Actualizeaza Parola'
          )}
        </button>
      </form>
    </>
  );
};

export default FoggotPassword;
