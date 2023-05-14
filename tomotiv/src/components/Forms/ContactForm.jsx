import React, { useState, useContext, useEffect, useRef } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import Link from 'next/link';
import { Context } from '../../context';
import { useRouter } from 'next/router';
import { tw } from 'twind';
import { colors } from '../../styles';
import { formStyles, typography } from '../../styles';
import LoadingSpinner from '../ux/Spinner/Spinner';


const ContactForm = () => {
    const [nume, setNume] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);
    const router = useRouter()

     const resetState = () => {
       setNume('');
       setEmail('');
       setPhone('');
       setContent('');
       formRef.current.reset();
     };


     const handleSubmit = async (e) => {
       e.preventDefault();
       setLoading(true);
       try {
         const { data } = await axios.post('/api/form-create',  {
      nume,
      email,
      phone,
      content,
      status: 'Nou',
    });
         
         toast.success('Formularul a fost trimis cu succes, Iti multumim si te vom contacta incurand');
         setLoading(false);
         router.push('/form-success')


       } catch (err) {
         setLoading(false);
         toast.error(`${err.message}`);
       }
     };


  

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className={`${formStyles.form} ${tw('w-2/3 m-auto p-7')}`}
      >
        <div className="flex flex-col  mx-3 mb-6">
          <div className="flex flex-col flex-wrap -mx-3 mb-6">
            <label className={formStyles.label} htmlFor="grid-name">
              Nume
            </label>
            <input
              className={formStyles.input}
              id="grid-name"
              type="text"
              placeholder="Nume"
              value={nume}
              onChange={(event) => setNume(event.target.value)}
            />
          </div>
          <div className="flex flex-col flex-wrap -mx-3 mb-6">
            <label className={formStyles.label} htmlFor="grid-email">
              Email
            </label>
            <input
              className={formStyles.input}
              id="grid-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="flex flex-col flex-wrap -mx-3 mb-6">
            <label className={formStyles.label} htmlFor="grid-phone">
              Telefon
            </label>
            <input
              className={formStyles.input}
              id="grid-phone"
              type="tel"
              placeholder="Telefon"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 flex flex-col">
            <label className={formStyles.label} htmlFor="grid-content">
              Mesaj
            </label>
            <textarea
              className={formStyles.textArea}
              id="grid-content"
              placeholder="Mesaj"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </div>
          <button className={formStyles.button} type="submit">
            Trimite
          </button>
        </div>
      </form>
    </>
  );
            
};

export default ContactForm;
