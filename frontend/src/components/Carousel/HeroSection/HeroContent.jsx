'use client';
import Image from 'next/image';
import React from 'react'
import { Hero, Artboard, Button } from 'react-daisyui';


const HeroContent = ({titlu = <></>, subtitlu=<></>, svg =<></>}) => {

  return (
    <div className="min-h-96 pl-20 lg:flex-row flex-col	leading-loose flex bg-base-100 z-10 justify-items-center w-full  justify-center gap-4">
      <Hero className=" z-10">
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
      <div className=" z-10 w-full h-full relative">{svg}</div>
    </div>
  );
}

export default HeroContent