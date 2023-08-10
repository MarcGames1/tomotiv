import React from "react";
import Image from "next/image";
import Link from "next/link";

 
export const config = {
  imageApi: `${process.env.NEXT_PUBLIC_IMAGES}/image`,
  videoApi: `${process.env.NEXT_PUBLIC_IMAGES}/video`,
};



export const servicii = [
  {
    label: 'Servicii SEO',
    href: '/servicii/servicii-seo',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    
  },
  {
    label: 'Promovare Google Ads',
    href: '/servicii/google-ads',
    p: 'Incepe sa investesti in campanii eficiente, rentabile si inteligent gandite, castigand bani, timp si clienti.',
    
  },

  {
    label: 'Creare Website',
    href: '/servicii/creare-website',
    p: 'Atrage-ti audienta pritr-un website personalizat, atractiv si perfect functional',
    
  },
  {
    label: 'Copywriting',
    href: '/servicii/copywriting',
    p: 'Dubleaza-ti vanzarile prin intermediul copywritingului adaptat nevoilor tale.',
    
  },
  {
    label: 'Creare Logo',
    href: '/servicii/creare-logo',
    p: 'Ramai memorabil in timp si fa-ti brandul cunoscut prin intermediul unui logo',
   
  },
  {
    label: 'Servicii Social Media',
    href: '/servicii/servicii-social-media',
    p: 'Promoveaza-ti afacerea intr-un mod inteligent, creativ si adaptat pietei',
    
  },
];

export const cumColaboramDate = [
  {
    heading: "Facem Cunostinta",
    description: 'Ne cunoastem si in cadrul intalnirii complet gratuite, analizam obiectivele tale'
},
  {
    heading: "Stabilim Obiective",
    description: 'Stabilim impreuna obiectivele si dezvoltam o strategie potrivita afacerii tale'
},
  {
    heading: "Te tinem la curent pe tot parcursul colaborarii",
    description: 'Stii in orice moment statusul proiectului si in ce stadiu suntem cu livrabilele'
},
  {
    heading: "Raportare si Call Periodic",
    description: 'Stii mereu cum Evolueaza Proiectul De la O luna La Alta'
},
  {
    heading: "Analizam si ne Adaptam",
    description: 'Analizam Performantele si ne adaptam in functie de nevoi, de concurenta sau de ceea ce este important pentru tine'
},

]

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
    poza: '/echipa/poze profil/profil-laura.jpg',
    nume: 'Iaurum',
    prenume: 'Laura',
    specializare:
      'Specialist marketing online, specializat in Social Media, Expert Branding si identitate Vizuala',
    functie: 'Co-Fondator Tomotiv',

    contact: {
      email: 'laura@tomotiv.ro',
      linkedin: '',
      facebook: '',
      instagram: '',
      tikTok: '',
      website: 'https://crela.ro/',
      whatsapp: 'https://wa.me/+40766713369',
      tel: '0766713369',
    },
  },

  alex: {
    poza: '/echipa/poze profil/profil-alexandru.webp',
    nume: 'Marcu',
    prenume: 'Alexandru',
    specializare:
      'Programator, Expert in Optimizarea Motoarelor de Cautare, Marketingul Motoarelor de Cautare si PPC ',
    functie: 'Co-Fondator Tomotiv',

    contact: {
      email: 'alexandru@tomotiv.ro',
      linkedin: 'https://www.linkedin.com/in/marcualexgeorge/',
      facebook:
        'https://www.facebook.com/people/Marcu-Alexandru-Web-Developer-si-Specialist-SEO/100070084327195/',
      instagram: 'https://www.instagram.com/george.marcu2/',
      tikTok: 'https://www.tiktok.com/@alexandrumarcu912',
      website: 'https://marweb.ro/',
      whatsapp: 'https://wa.me/+40750472447',
      tel: '0750472447',
    },
  },
};
// aici punem linkurile de social media
export const socialMedia = {
  instagram: 'https://www.instagram.com/tomotiv.ro/',
  facebook: 'https://www.facebook.com',
  youtube: 'https://www.youtube.com/@tomotiv',
  tikTok: 'https://www.tiktok.com',
  linkedin: 'https://www.linkedin.com',
};

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