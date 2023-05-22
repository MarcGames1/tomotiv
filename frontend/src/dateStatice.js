import React from "react";
import Image from "next/image";

export const servicii = [
  { label: 'Servicii Seo', href: '/servicii/servicii-seo' },
  { label: 'Promovare Google Ads', href: '/servicii/google-ads' },
  { label: 'Creare Website', href: '/servicii/creare-website' },
  { label: 'CopyWriting', href: '/servicii/copywriting' },
  { label: 'Creare Logo', href: '/servicii/creare-logo' },
  { label: 'Promovare Social Media', href: '/servicii/promovare-social-media' },
];


export const carouselData = [
  {
    titlu: (
      <>
        {' '}
        <h1 className="text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </h1>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image fill src={'/svg/carousel1.svg'} />
      </>
    ),
  },
  {
    titlu: (
      <>
        {' '}
        <h1 className="text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </h1>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image fill src={'/svg/carousel1.svg'} />
      </>
    ),
  },
  {
    titlu: (
      <>
        {' '}
        <h1 className="text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </h1>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">
          Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
          excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
          id nisi.
        </p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image fill src={'/svg/carousel1.svg'} />
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