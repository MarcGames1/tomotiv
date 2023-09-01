'use client'
import React, { useState, useRef } from 'react';
import { Input } from 'react-daisyui';
import toast from 'react-hot-toast';
import Link from 'next/link';
import ApiClient from '@/Classes/ApiClient';


const api = new ApiClient(process.env.NEXT_PUBLIC_API)




const ListaAsteptareCurs = ({numeCurs }) => {
    const [newsletterGeneral, setNewsletterGeneral] = useState(true)
    const[email, setEmail] = useState(null);
    const [nume, setNume] = useState(null) 
    const formRef = useRef(null);




    const formHandler = {
      reset: () => {
        setEmail(null);
        setNume(null);
        
        formRef.current.reset();
      },

      sendData: async () => {
        // const data  = await api.post('/login', { password, email });
        // console.log('SEND DATA METHOD Returned =>', await data)
        // return await data;
        try {
        const data  = await api.post('/newsletter-subscribe/curs', {
          name : nume,
          email,
          newsletterGeneral,
          numeCurs: 'Curs SEO ed.1'
        });
        console.log( await data)
        return await data;
        
        } catch (error) {
          console.log(error);
        }
      },

      submit: async (e) => {
        e.preventDefault();

        try {
          
          const data = await formHandler.sendData();
          console.table(data);
          if (data?.error) {
            toast.error(data.error);
            return;
          } 
           if (data.ok) {
               console.log('data => ', data);
               toast.success('Te vom anunta cand vom deschide redeschide inscrierile la curs');
            } else {
                toast.error('Ceva nu a functionat! Mai incearca odata sau trimite mail la contact@tomotiv.ro');
            }
        } catch (error) {
            toast.error(error.message);
        }
         
         
               

            
           

            
        formHandler.reset(); 
      },
    };

    const inputArgs = {
      className: 'w-full max-w-xs',
      bordered: true,
      color: 'secondary',
    };
  return (
    <div>
      <h2 className="text-2xl text-center font-bold">
        Te Vom Anunta cand Deschidem inscrierea pentru acest curs
      </h2>
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
              setEmail(e.target.value.toLowerCase());
              console.log('Email Changed,', email);
            }}
            name="email"
            type="email"
            {...inputArgs}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label htmlFor="nume" className="label">
            <span className="label-text">Nume </span>
          </label>
          <Input
            required
            onInput={(e) => {
              setNume(e.target.value);
            }}
            name="nume"
            type="text"
            {...inputArgs}
          />
        </div>
        <div className="form-control join join-vertical	 w-full max-w-xs">
          <label htmlFor="nume" className="label join-item 	">
            <span className="label-text">Vreau sa aflu si alte noutati ! </span>
            <input
              className="checkbox join-item	"
              onChange={(e) => {
                setNewsletterGeneral(e.target.checked);
              }}
              name="newsLetterGeneral"
              checked={newsletterGeneral}
              type="checkbox"
            />
          </label>
        </div>
        <button
          onSubmit={formHandler.submit}
          type="submit"
          className="btn btn-primary text-base-100 m-5"
        >
          Trimite
        </button>

        <div className="block m-auto prose  text-sm text-secondary">
          * Completarea si trimiterea formularului reprezinta acordul tau ca iti
          vom prelucra datele conform politicii noastre{' '}
          <Link className="link link-primary" href={'/gdpr'}>
            GDPR
          </Link>{' '}
        </div>
      </form>
    </div>
  );
}

export default ListaAsteptareCurs