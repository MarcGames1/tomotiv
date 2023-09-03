'use client'
import React, { useState, useRef, useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ApiClient from '@/Classes/ApiClient';
import { Alert, Button, Input, Tabs } from 'react-daisyui';
import { toast } from 'react-hot-toast';
import { Context } from '@/context';
import SignInForm from '../inregistrare/forms/SignInForm';
import { loadStripe } from '@stripe/stripe-js';

import { MetodaPlata, SigUpForm } from './ComponenteFormularInscriereCurs';
const FormularInscriereCurs = ({data}) => {

  const slug= 'curs-seo/'
     const inputArgs = {
       className: 'w-full max-w-xs',
       bordered: true,
       color: 'secondary',
     };

     const [nume, setNume] = useState('');
     const [preNume, setpreNume] = useState('');
     const [password, setPassword] = useState(undefined);
     const [email, setEmail] = useState('');
     const [metoda_plata, setMetoda_Plata] =useState('')
     const [loading, setLoading] = useState(false);
     const [emailExists, setEmailExists] = useState(false)
     const [userExists, setUserExists] = useState(false)
     const [action, setAction] = useState('signup')
     const [price, setPrice] = useState(undefined)
     const [discountedPrice, setDiscountedPrice] = useState(undefined)

       const {
         state: { user },
       } = useContext(Context);

      useEffect(() => {
        if (user) {
          setNume(user.nume);
          setpreNume(user.preNume);
          setEmail(user.email);
          console.log(user);
        }
        if(data && data.price && data.discountedPrice){
          setDiscountedPrice(data.discountedPrice);
          setPrice(data.price);
        }

        
      }, [user, data]);

 const formRef = useRef(null);

 const api = new ApiClient(process.env.NEXT_PUBLIC_API);
 const formHandler = {
   nume: (e) => {
     setNume(e.target.value);
   },
   preNume: (e) => {
     setpreNume(e.target.value);
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
     const res = await api.post(`/v2/comanda/${slug}`, {
       nume,
       preNume,
       password,
       email,
       metoda_plata
     });

     console.log('res => ', res);
     console.log('caught:::', JSON.stringify(res, null, 2));

     return res;
   },

   submit: async (e) => {
     e.preventDefault();
    if(!nume && !preNume && !email && !metoda_plata) {
      toast.error("Completeaza toate datele si alege o metoda de plata!")
      return;
    }
     const data = await formHandler.sendData();
     try {
       setLoading(true);
     
       if (data?.message) {
         toast.error(data.message);
         formHandler.reset();
         throw new Error(data.message);
       } else {
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

  return (
    <div className="m-5 p-5 flex flex-col gap-5">
      <pre>
        {JSON.stringify(
          { nume, preNume, metoda_plata, email, password },
          '',
          2
        )}
      </pre>
      {user ? (
        <>
          Multumim, {user.nume} {user.prenume} pentru increderea pe care o ai in
          a cumpara acest curs
        </>
      ) : (
        <p>
          Ești clientul nostru și te întorci?? Fă clic{' '}
          <span
            onClick={() => {
              setAction('login');
            }}
            className="link link-primary"
          >
            aici
          </span>{' '}
          pentru autentificare.
        </p>
      )}

      {user ? (
        <MetodaPlata
          price={price}
          discountedPrice={discountedPrice}
          setMetoda_Plata={setMetoda_Plata}
          metoda_plata={metoda_plata}
        />
      ) : (
        <span>
          Vom iti vom cere datele de facturare in pasul urmator, acestea sunt
          datele cu care te vei autentifica in platforma
        </span>
      )}

      {action === 'signup' ? (
        <SigUpForm
          data={data}
          metoda_plata={metoda_plata}
          formHandler={formHandler}
          setMetoda_Plata={setMetoda_Plata}
          formRef={formRef}
          user={user}
          inputArgs={inputArgs}
          setAction={setAction}
          loading={loading}
        >
          <div className="self-center flex flex-col gap-5">
            <MetodaPlata
              price={price}
              discountedPrice={discountedPrice}
              setMetoda_Plata={setMetoda_Plata}
              metoda_plata={metoda_plata}
            />
          </div>
        </SigUpForm>
      ) : (
        <>
          <SignInForm
            redirect={false}
            callback={() => {
              setAction('signup');
            }}
          />
        </>
      )}
    </div>
  );
}

export default FormularInscriereCurs







//   const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);

//   const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
//   stripe.redirectToCheckout({ sessionId: data });



