import Link from 'next/link';
import React from 'react'
import Image from 'next/image';
import Page from '@/app/PageLayout';
import HeroContent from '@/components/Carousel/HeroSection/HeroContent';
import { Sectiunea1 } from './texte';
import Carousel1 from './carousel1.svg'




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


    </Page>
  );
}

export default page



const Card = ({ image, alt, heading, descriere, tip_Continut }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};