'use client'
import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Page from '@/app/PageLayout';
import HeroContent from '@/components/Carousel/HeroSection/HeroContent';
import { Sectiunea1, Sectiunea2, Sectiunea3, Sectiunea5, sectiunea4 } from './texte';
import Carousel1 from './carousel1.svg'
import ContactForm from '@/components/ContactForm/ContactForm';
import Avatar from '@/components/Avatar/Avatar';
import { autori } from '@/dateStatice';
import CTAComponent from '../componenteServicii/CTA/CtaComponentLaura';
const {laura} = autori

const page = () => {
  return (
    <Page>
      <HeroContent
        titlu={
          <h1 className={'text-5xl lg:text-7xl font-bold'}>
            {Sectiunea1.heading}
          </h1>
        }
        subtitlu={<p className="py-6 prose prose-p">{Sectiunea1.paragraf}</p>}
        svg={
          <Image
            alt="Imagine Carusel 1"
            width={300}
            height={600}
            src={Carousel1}
          />
        }
      />
      <Sectiunea2Component {...Sectiunea2} />
      <Sectiunea2Component {...Sectiunea3} />
      <Sectiunea4Component {...sectiunea4} />

      {/* CTA */}

      <CTAComponent {...Sectiunea5 }  />
    </Page>
  );
}

export default page




const Sectiunea2Component = ({heading =<></>, platforme = [{heading:null, imagine:null, descriere:<></>, tip_continut: [""]}]}) =>{
  return (
    <>
      <h2 className=" block  m-10 lead font-bold text-3xl text-center">
        {heading}
      </h2>
      <div className={'flex flex-col lg:flex-row justify-center  gap-5 p-5'}>
        {platforme.map((platforma, idx) => {
          return (
            <>
              <Card key={idx} {...platforma} />
            </>
          );
        })}
      </div>
    </>
  );
}

const Card = ({
  imagine = null,
  heading = <></>,
  descriere = <></>,
  tip_Continut = [''],
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure className="p-5">{imagine}</figure>
      <div className="card-body flex flex-col items-center justify-items-start ">
        <h3 className="card-title text-center">{heading}</h3>
        <>{descriere}
        <strong className="text-center">Tip Continut</strong>
        <ul className="text-center  ">
          {tip_Continut.map((e, idx) => {
            return <li key={idx}>{e}</li>;
          })}
        </ul>
        </>
      </div>
    </div>
        
  );
};

const Sectiunea4Component = ({ heading }) => {
  return (
    <>
      <h2 className="text-center my-10 lead font-bold text-3xl">
        {heading}
      </h2>
    </>
  );
};

