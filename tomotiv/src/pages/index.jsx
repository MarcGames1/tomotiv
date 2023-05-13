import HeroSection from '../components/HeroSection'
import Page from '../components/Page'
import React from 'react'
import DespreSection from '../components/Section Despre';
import Section2 from '../components/Section2';
import Section3 from '../components/section3';
import Section4 from '../components/Section4';
import Offcanvas from '../components/Navbar/Offcanvas';
import FAQSection from '../components/FAQ Section/Index';
import ScroolAnimated from '../components/ScroolAnimated/ScroolAnimated';


const Homepage = () => {
  return (
    <Page>
      <HeroSection
        subtitle={
          'Tu ești viitorul. Înață unul dintre cele mai căutate skills din mediul digital. Descoperă-ți vocația studiind timp de 6 săptămâni Search Engine Optimization. Ești pregătit să fii cel mai bun din domeniu?'
        }
        title={'Ai Toate Motivele să reușești'}
      />

      {/* Renuntam la watch Video - facem popup cu video  */}
      {/* SECTIUNE DESPRE NOI  */}
      <ScroolAnimated.Up children={<DespreSection />} />
      <ScroolAnimated.Left children={<Section2 />} />
      <ScroolAnimated.Right children={<Section3 />} />
      <ScroolAnimated.Left children={<Section4 />} />
      <ScroolAnimated.Right children={<FAQSection />} />
    </Page>
  );
}

export default Homepage