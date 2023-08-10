import React from 'react'
import Link from 'next/link';
import { dateLegale } from '@/dateStatice'
import { autori } from '@/dateStatice';
import ContactForm from '@/components/ContactForm/ContactForm';

const Contact = () => {

  const {laura, alex} = autori


  return (
    <>
      <div className="prose m-auto bg-base-100 p-10 prose-xl">
        <h1 className="text-center">Contact Tomotiv</h1>

        <ContactForm />
        <div className="flex flex-row">
          <div className="flex flex-row">
            <span className="text-primary font-bold">Email:</span>
            <a href={'mailto:contact@tomotiv.ro'}>contact@tomotiv.ro</a>
          </div>
        </div>
        <div className="bg-base-100 p-10 flex flex-col lg:flex-row  justify-around gap-5">
          <ContactElement {...laura} />
          <ContactElement {...alex} />
        </div>
      </div>
    </>
  );
}

export default Contact




const ContactElement = ({prenume, nume, contact }) =>{
const {email, tel, whatsapp} = contact
  return (
    <>
      <div className="flex flex-col ">
        <Link href={`/echipa/${prenume.toLowerCase}-${nume.toLowerCase}`}>
          <h6 className="font-bold">
            {prenume} {nume}
          </h6>
        </Link>
        <div className="flex flex-row">
          <span className="text-primary font-bold">Email:</span>{' '}
          <a href={`mailto:${email}`}>{email}</a>
        </div>
        <div className="flex flex-row">
          <span className="text-primary font-bold">Whatsapp:</span>
          {'  '}
          <a href={`${whatsapp}`}>{tel}</a>
        </div>
      </div>
    </>
  );
}