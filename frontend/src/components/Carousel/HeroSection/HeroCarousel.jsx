'use client';
import React from 'react';
import Link from 'next/link';
import HeroContent from './HeroContent';
import { carouselData } from '@/dateStatice';
const HeroCarousel = () => {
  return (
    <>
      <div className="bg-base-100">
        <div className="z-10 carousel   bg-base-100">
          
            
              <div
                key={'carouselItem'}
                id={'item'}
                className="z-10 carousel-item w-full"
              >
                <HeroContent {...carouselData[0]} />
              </div>
            
          
        </div>
  
      </div>
    </>
  );
};

export default HeroCarousel;

