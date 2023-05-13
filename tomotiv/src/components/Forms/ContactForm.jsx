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
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-name">
              Nume
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-name"
              type="text"
              placeholder="Nume"
              value={nume}
              onChange={(event) => setNume(event.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
              Email
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-phone">
              Telefon
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-phone"
              type="tel"
              placeholder="Telefon"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-content">
              Mesaj
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-content"
              placeholder="Mesaj"
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
            </div>
            <button type='submit'>Trimite</button>
            </div>
            </form>
    </>
  )
            
};

export default ContactForm;
