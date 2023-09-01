import React from 'react'
import Link from 'next/link';
import { Avatar, Card } from 'react-daisyui';
import SocialIcons from '@/components/SocialIcons/SocialIcons';
const AuthorWidget = ({author}) => {
    const { poza, nume, prenume, specializare, functie, contact} = author

    
  return (
    <div>
      <Card
        normal="lg"
        className="shadow-2xl flex items-center justify-center justify-items-center text-center w-80 m-4"
      >
        <Avatar
          border
          className="my-5"
          color="primary"
          size={'lg'}
          shape="circle"
          src={poza}
        />
        <Card.Body className="text-center">
          <Link
            href={`/echipa/${prenume.toLowerCase()}-${nume.toLowerCase()}/`}
            className="link text-center font-bold text-lg"
          >
            {prenume} {nume}
          </Link>
          <p>{functie}</p>
          <p>{specializare}</p>
          <SocialIcons contact={contact} />
        </Card.Body>
      </Card>
    </div>
  );
}

export default AuthorWidget




const alex =  {
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
  }