'use client'
import React from 'react'

import Carousel1 from './carousel1.svg';

import Page from '@/app/PageLayout';
import Sectiunea1Component from '../componenteServicii/Sectiunea1Component';
import CardList6 from '../componenteServicii/CardList6';
import MembruEchipa from '@/components/MembruEchipa';
import { autori } from '@/dateStatice';
const { alex, laura } = autori;
import {
  Sectiunea1,
  Sectiunea2,
  Sectiunea3,
  Sectiunea4,
  Sectiunea5,
} from './texte';
import ContactForm from '@/components/ContactForm/ContactForm';





const GoogleAdsPage = () => {
  return (
    <Page>
      <Sectiunea1Component poza={Carousel1} {...Sectiunea1} />
      <CardList6 {...Sectiunea2} />
      <CardList6 {...Sectiunea3} />
      <CardList6 numbered {...Sectiunea4} />
      <>{Sectiunea5.heading}</>
      <div className="flex flex-col lg:flex-row m-5 p-5 lg:m-10 lg:p-10 gap-5">
        <div className="lg:w-1/2 bg-base-100 rounded-xl shadow-xl items-center">
          <div className="grid lg:grid-flow-col lg:grid-cols-2  items-center justify-items-center w-full h-full ">
            <MembruEchipa {...laura} />
            <MembruEchipa {...alex} />
          </div>
        </div>
        <div className="lg:w-1/2 bg-base-100 rounded-xl shadow-xl p-10">
          <ContactForm />
          <div className='prose my-5'>
            <p>
              
             
                Ai toate motivele sa ajungi la cat mai multi cumparatori si ai
                tot suportul nostru pentru a ajunge exact acolo unde iti
                doresti. Contacteaza-ne acum si hai sa iti ducem afacerea la un
                alt nivel.
             
            </p>
          </div>
        </div>
      </div>
    </Page>
  );
}

export default GoogleAdsPage