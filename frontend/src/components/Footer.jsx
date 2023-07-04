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
import { socialMedia, servicii, dateLegale } from '@/dateStatice';


const PageFooter = () => {
  return (
    <Footer className="bg-secondary  p-10 text-base-100">
      <div>
        <Image
          alt="Tomotiv Logo"
          src={'/svg/logoD.svg'}
          width={118}
          height={44}
        />
        <div className="flex gap-5 items-center">
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
        <a href={`mailto:${dateLegale.dateFirma.email}`}>
          <span>{dateLegale.dateFirma.email}</span>
        </a>
      </div>

      <div>
        <Footer.Title>Servicii</Footer.Title>
        {servicii.map((serviciu) => {
          return (
            <Link
              key={serviciu.label}
              className="link link-hover"
              href={serviciu.href}
            >
              {serviciu.label}
            </Link>
          );
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
        <Link
          className="w-[250px] h-[60px]"
          rel="nofollow"
          target="_blank"
          href={'https://anpc.ro/ce-este-sal/'}
        >
          <Image alt="SAL" src={'/anpc/SAL.svg'} width={250} height={60} />
        </Link>
        <Link
          rel="nofollow"
          target="_blank"
          href={'https://ec.europa.eu/consumers/odr'}
        >
          <Image alt="SOL" src={'/anpc/SOL.svg'} width={250} height={60} />
        </Link>
      </div>
      <div>
        <Footer.Title>Legal</Footer.Title>
        <Link href={'/termeni-conditii'} className="link link-hover">
          Termene si Conditii
        </Link>
        <Link href={'/gdpr'} className="link link-hover">
          GDPR
        </Link>
        <Link href={'/politica-cookie'} className="link link-hover">
          Politica Cookie
        </Link>
      </div>
    </Footer>
  );
  
}

export default PageFooter