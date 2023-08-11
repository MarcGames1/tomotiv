import React from 'react'
import Page from '@/app/PageLayout';
import ProAndContraComponent from '../componenteServicii/ProSiContra';
import CardList6 from '../componenteServicii/CardList6';

import Carousel1 from './carousel1.svg';
import { 
  Sectiunea1,
  Sectiunea2,
  Sectiunea3, 
  Sectiunea5,
  Sectiunea6
 } from './texte';
import Sectiunea1Component from '../componenteServicii/Sectiunea1Component';

import CTAComponent from '../componenteServicii/CTA/CtaComponent';

const page = () => {
  return (
    <Page>
      <Sectiunea1Component poza={Carousel1} {...Sectiunea1} />
      <CardList6 {...Sectiunea2} />
      <ProAndContraComponent
        heading={Sectiunea3.heading}
        pro={Sectiunea3.descriere.pro}
        contra={Sectiunea3.descriere.contra}
      />
      <Sectiunea4Component />
      <Sectiunea5Component {...Sectiunea5} />
      <CTAComponent alex {...Sectiunea6} />
    </Page>
  );
}

export default page


const Sectiunea4Component = ({heading}) =>{
return (
  <>{heading}</>
)
}


const Sectiunea5Component = ({heading, etape}) =>{
return (
  <section className=' '>
  <>{heading}</>
  {etape.map((e , idx) =>{
    return (
      <div className="alert m-10 p-5 shadow-lg flex flex-col lg:flex-row">
        <span className={'w-2/12 text-primary text-9xl	'}>{idx + 1}</span>
        <span className="w-10/12 flex flex-col text-3xl">{e}</span>
      </div>
    );
  })}
  </section>

)
}