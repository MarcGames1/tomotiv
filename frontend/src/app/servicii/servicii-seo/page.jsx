import React from 'react'
import Page from '@/app/PageLayout';
import ProAndContraComponent from '../componenteServicii/ProSiContra';
import CardList6 from '../componenteServicii/CardList6';
import PasiNumerotatiCuHeading from '../componenteServicii/PasiNumerotatiCuHeading';
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
      <PasiNumerotatiCuHeading {...Sectiunea5} />
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


