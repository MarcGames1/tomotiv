'use client';
import React from 'react'
import CarouselContent from './CarouselContent'
import { Carousel } from 'react-daisyui';

const HeroCarousel = () => {
  const args = {}
  return (
    <>
    
      <Carousel  className="w-full bg-base-100">
        <Carousel.Item index={1}  className="w-full bg-base-100">
          <CarouselContent />
        </Carousel.Item>
        <div id="item2" className="carousel-item w-full">
          <CarouselContent />
        </div>
        <div id="item3" className="carousel-item w-full">
          <CarouselContent />
        </div>
        <div id="item4" className="carousel-item w-full">
          <CarouselContent />
        </div>
      </Carousel>
      <div className="flex justify-center w-full py-2 gap-2">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </>
  );
}

export default HeroCarousel