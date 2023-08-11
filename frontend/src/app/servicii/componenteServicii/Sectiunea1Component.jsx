import React from 'react'
import HeroContent from '@/components/Carousel/HeroSection/HeroContent';
import Image from 'next/image';
const Sectiunea1Component = ({heading, paragraf, poza}) => {
  return (
    <>
      <HeroContent
        titlu={
          <h1 className={'text-5xl lg:text-7xl font-bold'}>
            {heading}
          </h1>
        }
        subtitlu={<p className="py-6 prose prose-p">{paragraf}</p>}
        svg={
          <Image alt="Imagine Carusel 1" width={300} height={600} src={poza} />
        }
      />
    </>
  );
}

export default Sectiunea1Component