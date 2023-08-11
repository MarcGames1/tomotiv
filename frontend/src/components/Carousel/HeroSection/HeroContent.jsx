'use client';
import React from 'react'
import { Hero } from 'react-daisyui';
import Link from 'next/link';

const HeroContent = ({titlu = <></>, subtitlu=<></>, svg =<></>}) => {

  return (
    <div className="min-h-96 lg:pl-20 lg:flex-row flex-col	leading-loose flex bg-base-100 z-10 justify-items-center  w-full  justify-center gap-4">
      <Hero className=" ">
        
        <Hero.Content className=" z-10 bg-base-100 text-left">
          <div className="max-w z-10">
            {titlu}
            {subtitlu}

            <Link href={'/contact'} className="text-base-100 btn btn-primary" >
              Contacteaza-ne
            </Link>
          </div>
        </Hero.Content>
      </Hero>
      <div className="  w-full h-full relative m-auto text-center items-center flex flex-col">{svg}</div>
    </div>
  );
}

export default HeroContent