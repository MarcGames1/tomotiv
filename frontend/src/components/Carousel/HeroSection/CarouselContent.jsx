'use client';
import Image from 'next/image';
import React from 'react'
import { Hero, Artboard, Button } from 'react-daisyui';


const CarouselContent = ({h1 = <></>, p=<></>, svg, button}) => {

  return (
    <div className="grid bg-base-100  grid-cols-6 justify-center gap-4">
      <Hero className="bg-base-100 col-start-2 col-span-3">
        <Hero.Overlay className=" bg-opacity-60" />
        <Hero.Content className="bg-base-100 text-left">
          <div className="max-w">
            <h1 className="text-7xl font-bold">
              Ai Toate Motivele sa{' '}
              <span className="text-primary">reusesti</span>
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>

            <Button className="text-base-100" color="primary">
              Afla Mai Multe
            </Button>
          </div>
        </Hero.Content>
      </Hero>
      <div className=" col-span-2 relative">
        <Image fill src={'/svg/carousel1.svg'} />
      </div>
    </div>
  );
}

export default CarouselContent