'use client';
import React from 'react';
import Link from 'next/link';
import HeroContent from './HeroContent';
import { Button, Carousel } from 'react-daisyui';
import { carouselData } from '@/dateStatice';
const HeroCarousel = () => {
  return (
    <>
      <div className="bg-base-100">
        <div className="z-10 carousel   bg-base-100">
          {carouselData.map((d, idx) => {
            return (
              <div
                key={'carouselItem' + idx}
                id={'item' + idx}
                className="z-10 carousel-item w-full"
              >
                <HeroContent {...d} />
              </div>
            );
          })}
        </div>
        <Bulinute />
      </div>
    </>
  );
};

export default HeroCarousel;

export const Bulinute = () => {
  const anchorStyle = 'btn btn-xs  border-0  bg-base-100 text-primary';
  return (
    <div className="z-50 text-primary bg-base-100 flex justify-center w-full py-2 gap-2">
      {carouselData.map((d, idx) =>{
        return (
          <a key={'itemLink' + idx} href={'#item' + idx} className={anchorStyle}>
            &bull;
          </a>
        );
      })}
      
    </div>
  );
};
