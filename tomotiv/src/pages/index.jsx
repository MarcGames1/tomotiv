import HeroSection from '../components/HeroSection'
import Page from '../components/Page'
import React from 'react'
import Section2 from '../components/Section2';
import Section3 from '../components/section3';

const Homepage = () => {
  return (
    <Page>
      <HeroSection
        subtitle={
          'Tu ești viitorul. Înață unul dintre cele mai căutate skills din mediul digital. Descoperă-ți vocația studiind timp de 6 săptămâni Search Engine Optimization. Ești pregătit să fii cel mai bun din domeniu?'
        }
        title={'Ai Toate Motivele să reușești'}
      />
      <Section2 />
      <Section3 />
      
    </Page>
  );
}

export default Homepage