import Image from 'next/image';

export const meta = {
  titlu: 'Agentie Social Media Marketing si Management » Tomotiv',
  descriere:
    ' Agentia unde gasesti social media marketing, servicii de social media, promovare social media, consultata si social media management intr-un singur loc',
};
export const Sectiunea1 = {
  heading: (
    <>
      <span className="text-primary">Agentie Social Media Marketing</span>
      {" "}si Management
    </>
  ),
  paragraf: (
    <>
      Ai toate motivele sa fii cel mai cunoscut in mediul online. Construieste
      campanii care sa ajunga la audienta ta.
    </>
  ),
};

export const Sectiunea2 = {
  heading: <>Servicii promovare social media (Organic )</>,
  platforme: [
    {
      heading: <>Facebook</>,
      descriere: (
        <>
          Tinteste-ti clientii cu ajutorul continutului organic si eficient in
          cadrul uneia dintre cele mai iubite platforme.
        </>
      ),
      tip_Continut: ['Image', 'Video', 'Carousel', 'Story', 'Reels'],
    },
    {
      heading: <>{'Instagram'}</>,
      descriere: (
        <>
          {
            'Fii acolo cand publicul tau tinta are nevoie de tine. Creste-ti contul '
          }
          {'cu ajutorul continutului de calitate.'}
        </>
      ),
      tip_Continut: ['Image', 'Video', 'Carousel', 'Story', 'Reels'],
    },
    {
      heading: <>{'Tiktok'}</>,
      descriere: (
        <>
          {
            'Devino influencer peste noapte cu ajutorul uneia dintre cele mai populare, '
          }
          {'iubite si ravnite platforme din mediul online.'}
        </>
      ),
      tip_Continut: ['Video'],
    },
  ],
};

export const Sectiunea3 = {
  heading: (
    <>
      heading: <>Servicii promovare social media ( Ads )</>,
    </>
  ),
  platforme: [
    {
      heading: <>{'Facebook'}</>,
      descriere: (
        <>
          {'Tinteste publicul tinta cu ajutorul reclamelor performante de tip '}
          {
            'Social Media Ads capabile sa atinga obiectivele afacerii dumneavoastra la costuri reduse.'
          }
        </>
      ),
      tip_Reclame: [
        'Image Ads',
        'Video Ads',
        'Carousel Ads',
        'Story Ads',
        'Reels Ads',
        'Messenger Ads',
      ],
    },
    {
      heading: <>{'Instagram'}</>,
      descriere: (
        <>
          {
            'Fii prezent atunci cand audienta ta are nevoie. Derulam campanii profesionale '
          }
          {
            'tip Instagram Ads care vor ajunge la timpul potrivit cu audienta dumneavoastra.'
          }
        </>
      ),
      tip_Reclame: [
        'Image Ads',
        'Video Ads',
        'Carousel Ads',
        'Instagram Shop Ads',
        'Story Ads',
        'Reels Ads',
      ],
    },
    {
      heading: <>{'Tiktok'}</>,
      descriere: (
        <>
          {
            'Fii cea mai influentabila afacere din mediul online cu ajutorul reclamelor '
          }
          {
            'TikTok Ads. Conecteaza-te la un alt nivel cu publicul tinta cu ajutorul reclamelor de pe Tiktok.'
          }
        </>
      ),
      tip_Reclame: ['Video'],
    },
  ],
};

export const sectiunea3 = {
  heading: <>Cum decurge un proiect de Social Media Management</>,
};

export const sectiunea4 = {
  heading: (
    <>
      Conecteaza-te la un alt nivel cu un specialist in Social Media Management
    </>
  ),
  descriere: (
    <>
      Eu sunt Laura Iaurum, specialist in Marketing, focusat pe Social Media
      Management si co-Fondator Tomotiv. Te invit sa dezvoltam impreuna cele mai
      potrivite strategii de marketing in mediul online pentru tine si afacerea
      ta.
    </>
  ),
};
