import React from 'react';
import Servicii from '../../components/pageTemplates/servicii';
import { tw } from 'twind';

const CreeareLogo = () => {
  const title = 'Titlu Sectiune';
  const subtitle = 'Subtitlu Sectiune';
  const metaTitlu = 'Meta Titlu';
  const metaDescriere = 'meta Descriere';
  const canonical = 'https://www.tomotiv.ro/servicii/creare-logo';
  const faq = {
    title: (
      <div className={tw('text-center block w-full')}>Intrebari Frecvente</div>
    ),
    rows: [
      {
        title: 'Lorem ipsum dolor sit amet,',
        content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
              ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
              In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
              Fusce sed commodo purus, at tempus turpis.`,
      },
      {
        title: 'Nunc maximus, magna at ultricies elementum',
        content:
          'Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.',
      },
      {
        title: 'Curabitur laoreet, mauris vel blandit fringilla',
        content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
            Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
            Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
            Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
      },
      {
        title: 'What is the package version',
        content: <p>current version is 1.2.1</p>,
      },
    ],
  };

  // subtitle: any;
  // faq: any;
  // metaTitlu: any;
  // metaDescriere: any;
  // canonical: any;
  return (
    <Servicii
      title={title}
      subtitle={subtitle}
      metaDescriere={metaDescriere}
      metaTitlu={metaTitlu}
      canonical={canonical}
      faq={faq}
    />
  );
};

export default CreeareLogo;
