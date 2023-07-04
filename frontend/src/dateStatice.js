import React from "react";
import Image from "next/image";
import Link from "next/link";
export const config = {
  imageApi: `${process.env.NEXT_PUBLIC_IMAGES}/image`,
  videoApi: `${process.env.NEXT_PUBLIC_IMAGES}/video`,
};



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
        <h1 className="text-5xl lg:text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </h1>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">
          Nu îți promitem îmbogățiri peste noapte, însă te asigurăm că atât
          serviciile cât și cursurile noastre te vor face să știi cum să îți
          monetizezi pasiunile pentru a îți atinge obiectivele.
        </p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image alt="Imagine Carusel 1" fill src={'/svg/carousel1.svg'} />
      </>
    ),
  },
  {
    titlu: (
      <>
        {' '}
        <h1 className="md:text-5xl lg:text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </h1>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">
          Nu îți promitem îmbogățiri peste noapte, însă te asigurăm că atât
          serviciile cât și cursurile noastre te vor face să știi cum să îți
          monetizezi pasiunile pentru a îți atinge obiectivele.
        </p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image alt="Imagine Carusel 2" fill src={'/svg/carousel1.svg'} />
      </>
    ),
  },
  {
    titlu: (
      <>
        {' '}
        <h1 className="md:text-5xl text-7xl font-bold">
          Ai Toate Motivele sa <span className="text-primary">reusesti</span>
        </h1>
      </>
    ),
    subtitlu: (
      <>
        <p className="py-6">
          Nu îți promitem îmbogățiri peste noapte, însă te asigurăm că atât
          serviciile cât și cursurile noastre te vor face să știi cum să îți
          monetizezi pasiunile pentru a îți atinge obiectivele.
        </p>
      </>
    ),
    svg: (
      <>
        {' '}
        <Image alt="Imagine Carusel 3" fill src={'/svg/carousel1.svg'} />
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