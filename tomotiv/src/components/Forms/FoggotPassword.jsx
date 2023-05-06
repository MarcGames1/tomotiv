import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { Context } from '../../context';
import { useRouter } from 'next/router';
import { tw } from 'twind';
import { colors } from '../../styles';
import { formStyles, typography } from '../../styles';

// import { LoadingSpinner } from '..';

 const FoggotPassword = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const formRef = useRef(null); // referința către elementul form
    
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
      const { data } = await axios.post('/api/forgot-password', { email });
      setSuccess(true);
      toast('Check your email for the secret code');
      setLoading(false);
    } catch (err) {
      setLoading(false);
      toast(err.response.data);
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    console.log(email, code, newPassword);
    // return;
    try {
      setLoading(true);
      const { data } = await axios.post('/api/reset-password', {
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
  return (
    <div className={tw(' flex flex-col')}>
      <h1 className={`${typography.heading1}`}>Forgot Password</h1>

      <div className={tw('self-center flex sm: w-full lg:w-1/3')}>
        <form
          className={`${formStyles.form}`}
          ref={formRef}
          onSubmit={success ? handleResetPassword : handleSubmit}
        >
          <input
            type="email"
            className={formStyles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          {success && (
            <>
              <input
                type="text"
                className={formStyles.input}
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="Enter secret code"
                required
              />

              <input
                type="password"
                className={formStyles.input}
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="New Password"
                autoComplete="off"
                required
              />
            </>
          )}

          <button
            type="submit"
            className={formStyles.button}
            disabled={loading || !email}
          >
            {loading ? (
              <LoadingSpinner color={colors.crelaRoz} message="" />
            ) : (
              'Submit'
            )}
          </button>
        </form>
      </div>
    </div>
  );
}

export default FoggotPassword