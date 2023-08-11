'use client'
import React from 'react'
import Page from '@/app/PageLayout';
import { Sectiunea1, Sectiunea2, Sectiunea3, Sectiunea5, sectiunea4 } from './texte';
import Carousel1 from './carousel1.svg'
import Sectiunea1Component from '../componenteServicii/Sectiunea1Component';
import { autori } from '@/dateStatice';
import CTAComponent from '../componenteServicii/CTA/CtaComponent';
const {laura} = autori

const page = () => {
  return (
    <Page>
      <Sectiunea1Component poza={Carousel1} {...Sectiunea1} />
      <Sectiunea2Component {...Sectiunea2} />
      <Sectiunea2Component {...Sectiunea3} />
      <Sectiunea4Component {...sectiunea4} />

      {/* CTA */}

      <CTAComponent {...Sectiunea5} />
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

