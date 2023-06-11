'use client';
import React from 'react'
import Link from 'next/link'

import { Footer } from 'react-daisyui'
import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineYoutube,
  AiOutlineLinkedin,
} from 'react-icons/ai';
import {FaTiktok} from 'react-icons/fa'
import Image from 'next/image';
import { socialMedia, servicii } from '@/dateStatice';


const PageFooter = () => {
  return (
    <Footer className="bg-secondary  p-10 text-base-100">
      <div>
        <Image src={'/svg/logoD.svg'} width={118} height={44} />
        <div className='flex gap-5 items-center'>
          <a href={socialMedia.facebook}>
            <AiOutlineFacebook size={'2em'} />
          </a>
          <a href={socialMedia.instagram}>
            <AiOutlineInstagram size={'2em'} />
          </a>
          <a href={socialMedia.youtube}>
            <AiOutlineYoutube size={'2em'} />
          </a>
          <a href={socialMedia.tikTok}>
            <FaTiktok size={'2em'} />
          </a>
          <a href={socialMedia.linkedin}>
            <AiOutlineLinkedin size={'2em'} />
          </a>
        </div>
      </div>

      <div>
        <Footer.Title>Servicii</Footer.Title>
        {servicii.map(serviciu =>{
          return <Link className="link link-hover" href={serviciu.href}>
            {serviciu.label}
          </Link>;
        })}
        
      </div>
      <div>
        <Footer.Title>Company</Footer.Title>
        <Link href={'/despre-noi'} className="link link-hover">
          Despre Noi
        </Link>
        <Link href={'/contact'} className="link link-hover">
          Contact
        </Link>

      </div>
      <div>
        <Footer.Title>Legal</Footer.Title>
        <Link href={''} className="link link-hover">
          Terms of use
        </Link>
        <Link href={''} className="link link-hover">
          Privacy policy
        </Link>
        <Link href={''} className="link link-hover">
          Cookie policy
        </Link>
      </div>
    </Footer>
  );
  
}

export default PageFooter