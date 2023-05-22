'use client';
import Image from 'next/image';
import React from 'react'
import { Hero, Artboard, Button } from 'react-daisyui';


const HeroContent = ({titlu = <></>, subtitlu=<></>, svg =<></>}) => {

  return (
    <div className="grid bg-base-100 z-10 grid-cols-6 justify-center gap-4">
      <Hero className=" z-10 col-start-2 col-span-3">
        <Hero.Overlay className=" z-10 bg-opacity-60" />
        <Hero.Content className=" z-10 bg-base-100 text-left">
          <div className="max-w z-10">
           {titlu}
          {subtitlu}

            <Button className="text-base-100" color="primary">
              Afla Mai Multe
            </Button>
          </div>
        </Hero.Content>
      </Hero>
      <div className="z-10 col-span-2 relative">
       {svg}
      </div>
    </div>
  );
}

export default HeroContent