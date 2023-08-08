import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsBuildings } from 'react-icons/bs';
import { TbSeo, TbWorldWww } from 'react-icons/tb';
import { SiGoogleads, SlNotebook } from 'react-icons/si';
import { IoShareSocial} from 'react-icons/io'
import {GrBusinessService} from 'react-icons/gr'
 
export const config = {
  imageApi: `${process.env.NEXT_PUBLIC_IMAGES}/image`,
  videoApi: `${process.env.NEXT_PUBLIC_IMAGES}/video`,
};



export const servicii = [
  {
    label: 'Servicii SEO',
    href: '/servicii/servicii-seo',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    icon: <TbSeo className="text-primary" size={'5em'} />,
  },
  {
    label: 'Promovare Google Ads',
    href: '/servicii/google-ads',
    p: 'Incepe sa investesti in campanii eficiente, rentabile si inteligent gandite, castigand bani, timp si clienti.',
    icon: <SiGoogleads className="text-primary" size={'5em'} />,
  },

  {
    label: 'Creare Website',
    href: '/servicii/creare-website',
    p: 'Atrage-ti audienta pritr-un website personalizat, atractiv si perfect functional',
    icon: <TbWorldWww className="text-primary" size={'5em'} />,
  },
  {
    label: 'Copywriting',
    href: '/servicii/copywriting',
    p: 'Dubleaza-ti vanzarile prin intermediul copywritingului adaptat nevoilor tale.',
    icon: <GrBusinessService className="text-primary" size={'5em'} />,
  },
  {
    label: 'Creare Logo',
    href: '/servicii/creare-logo',
    p: 'Ramai memorabil in timp si fa-ti brandul cunoscut prin intermediul unui logo',
    icon: <GrBusinessService className="text-primary" size={'5em'} />,
  },
  {
    label: 'Promovare Social Media',
    href: '/servicii/promovare-social-media',
    p: 'Promoveaza-ti afacerea intr-un mod inteligent, creativ si adaptat pietei',
    icon: <GrBusinessService className="text-primary" size={'5em'} />,
  },
];


export const carouselData = [
  {
    titlu: (
      <>
        <h1 className="text-3xl font-semibold	">Agentie Marketing Online</h1>
        <div className="text-5xl lg:text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </div>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">Cu ajutorul agentiei noastre de marketing online</p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image alt="Imagine Carusel 1" fill src={'/svg/carousel1.svg'} />
      </>
    ),
  },
];


export const autori = {
  laura: {
    poza: '/assets/echipa/Laura_Profil.png',
    nume: 'Iaurum',
    prenume: 'Laura',
    functie: 'Social Media Specialist',

    contact: {
      email: 'laura@tomotiv.ro',
      linkedin:'',
      facebook: '',
      instagram: '',
      tikTok: '',
      website: 'https://crela.ro/',
    },
  },

  alex: {
    poza: '/assets/echipa/Alex_Profil.png',
    nume: 'Marcu',
    prenume: 'Alexandru',
    functie: 'Functie',

    contact: {
      email: 'alexandru@tomotiv.ro',
      linkedin:'',
      facebook:
        'https://www.facebook.com/people/Marcu-Alexandru-Web-Developer-si-Specialist-SEO/100070084327195/',
      instagram: 'https://www.instagram.com/george.marcu2/',
      tikTok:'https://www.tiktok.com/@alexandrumarcu912',
      website: 'https://marweb.ro/',
    },
  },
};
// aici punem linkurile de social media
export const socialMedia ={
  instagram: 'https://www.instagram.com',
  facebook: 'https://www.facebook.com',
  youtube: 'https://www.youtube.com',
  tikTok:'https://www.tiktok.com',
  linkedin: 'https://www.linkedin.com',
}

export const dateLegale = {
  brand:'Tomotiv',
  site: <Link href={'https://tomotiv.ro/'}>tomotiv.ro</Link>,
  dateFirma: {
    nume: <>SPEEDY BIKES SRL</>,
    sediuSocial: <>Str. ZAHARIA STANCU, nr.6F,bl. 16 et.3, ap.306</>,
    regCom: <>J08/2387/2019 </>,
    cui: <>41397812</>,
    cont: <>RO67 BREL 0002 0035 9868 0100, deschis la Libra Bank</>,
    reprezentant: <>Marcu Alexandru, in calitate de administrator</>,
    email: 'contact@tomotiv.ro',
  },
};