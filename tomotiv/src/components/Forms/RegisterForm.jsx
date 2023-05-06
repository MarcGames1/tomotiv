import React, { useState, useRef, useEffect, useContext } from 'react';
import { tw } from 'twind'
import axios from 'axios';
import toast from 'react-hot-toast';
// import { LoadingSpinner } from '..';



import { formStyles, colors } from '../../styles'
import { useRouter } from 'next/router';
import { Context } from '../../context/';
const RegisterForm = () => {

const sendData = async () => {
  let data = {};
 const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
    nume,
    password,
    email,
  });

  console.log("res => ",res)
    if (res) {
      data = res.data; // update the data variable with the response data
    }
  return data;


}

  const [nume, setNume] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [loading, setLoading] = useState(false)

  
  const router = useRouter()
  const formRef = useRef(null); // referința către elementul form
  
  
const {state : {user} } = useContext(Context)  

  useEffect(() => {
    if (user !== null) {
      router.push('/');
    }
  }, [user]);

  const resetState = () => {
    setNume(null);
    setEmail(null);
    setPassword(null);
    setLoading(false);
    
    formRef.current.reset();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
    const data = await sendData()
      await console.log(data)
      toast.success("te-ai inregistrat cu succes")
      setLoading(false);
      resetState();
    } catch (error) {
      
   
    
      
    
      if(error){ toast.error(error.message)}
      resetState();
    }
  };

  return (
    <div className={tw('self-center sm: w-full lg:w-1/3')}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        id="Formular Contact"
        className={formStyles.form}
      >
        <label className={formStyles.label} htmlFor="nume">
          Nume
        </label>
        <input
          className={formStyles.input}
          type="text"
          name="nume"
          required
          onInput={(e) => setNume(e.target.value)}
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

        <button disabled={!nume || !email || !password  || loading} className={formStyles.button} type="submit">
          
          {!loading && ("TRIMITE")}
          {/* {loading && (<LoadingSpinner color={colors.crelaRoz} message="" />)} */}
        </button>
        
  
      </form>
    </div>
  )
}



export default RegisterForm