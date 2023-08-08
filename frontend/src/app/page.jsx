import HeroCarousel from '@/components/Carousel/HeroSection/HeroCarousel'
import SectiuneGri from '@/components/SectiuneGri'
import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';
import Card1 from '@/components/LayoutComponents/cardSectionComponents/Card1/Card1';
import {IoIosPeople} from 'react-icons/io'
import {BsBuildings} from 'react-icons/bs'
import Sectiune3Card from '@/components/LayoutComponents/cardSectionComponents/sectiune3Card';
import CardContainer from '@/components/LayoutComponents/cardSectionComponents/CardContainer';
import Page from './PageLayout';
import Mobile_Logi from '@/components/svg/mobile_logi';
import IconAndText from '@/components/IconAndText/IconAndText';
import HeadingAndCta from '@/components/HeadingAndCta/HeadingAndCta';
import NumbersSection from './NumbersSectoion/NumbersSection';
import Hands from '@/components/svg/Hands';
import Mobile2 from '@/components/svg/Mobile2';
import Grid3x2 from '@/components/Grid3x2';
import { servicii } from '@/dateStatice';


const dateServiciiCard = [
  {
    label: 'Servicii SEO',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    icon: <BsBuildings className="text-primary" size={'5em'} />,
    href: '/servicii/servicii-seo/',
  },
  {
    label: 'Promovare Google ADS',
    p: 'Incepe sa investesti in campanii eficiente, rentabile si inteligent gandite, castigand bani, timp si clienti.',
    icon: <BsBuildings className="text-primary" size={'5em'} />,
    href: '/servicii/servicii-seo/',
  },
  {
    label: 'Servicii SEO',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    icon: <BsBuildings className="text-primary" size={'5em'} />,
    href: '/servicii/servicii-seo/',
  },
  {
    label: 'Servicii SEO',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    icon: <BsBuildings className="text-primary" size={'5em'} />,
    href: '/servicii/servicii-seo/',
  },
  {
    label: 'Servicii SEO',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    icon: <BsBuildings className="text-primary" size={'5em'} />,
    href: '/servicii/servicii-seo/',
  },
  {
    label: 'Servicii SEO',
    p: 'Optimizeaza-ti websiteul cu ajutorul SEO pentru a obtine cea mai buna vizbilitate pentru tine si afacerea ta.',
    icon: <BsBuildings className="text-primary" size={'5em'} />,
    href: '/servicii/servicii-seo/',
  },
];

export default function Home() {
  return (
    <Page>
      <main className="">
        <SectiuneAlba margin="mr-20 ml-10">
          <HeroCarousel />
        </SectiuneAlba>
        <SectiuneGri>
          <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
            <h2 className="text-center">
              Ce Servicii oferim in cadrul agentiei de marketing digital -
              Tomotiv?
            </h2>
          <Grid3x2 data={servicii} />
          </div>
          <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
            <h2 className="text-center">
              {' '}
              De ce <span className="text-primary">Tomotiv</span>
            </h2>
            <p>
              Susținem, creștem și încurajăm oamenii să încerce să își dezvolte
              skilluri prin care fie se pot angaja sau de ce nu, presta servicii
              de freelancing. Cu ajutorul specialiștilor de la Tomotiv, veți
              putea nu termina un simplu curs, ci intra într-o comunitate de
              oameni care iubesc marketingul digital.
            </p>
          </div>
          <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
            <h2 className="prose block m-auto my-10 lead font-bold text-3xl text-center">
              Valorile Companiei
            </h2>
          </div>
          <Sectiune3Card className={' my-5 gap-3 '}>
            <CardContainer idx={1}>
              <Card1
                p={
                  'Întotdeauna vom rămâne onești față de dumneavoastră, încercând să livrăm atât cursuri cât și servicii de calitate.'
                }
                heading={'Onestitate'}
              >
                <IoIosPeople className="text-primary" size={'5em'} />
              </Card1>
            </CardContainer>
            <CardContainer idx={4}>
              <Card1
                p={
                  ' Dorim să creem relații profesionale bazate pe încredere, prin care să reușim să creem punți de legăture între dumneavoastră și Tomotiv.'
                }
                heading={'Încredere'}
              >
                <BsBuildings className="text-primary" size={'5em'} />
              </Card1>
            </CardContainer>
            <CardContainer idx={8}>
              <Card1
                p={
                  ' Scopul nostru este creem medii de lucru sau de învățare bazate pe respect și loialitate.'
                }
                heading={'Respect'}
              >
                <Hands
                  className={'text-primary'}
                  width={'5em'}
                  height={'5em'}
                />
              </Card1>
            </CardContainer>
          </Sectiune3Card>
          <IconAndText
            icon={<Mobile_Logi />}
            heading={
              <>
                În premieră, <span className="text-primary">primul</span> curs
                acreditat de SEO în România.
              </>
            }
            p={
              <p>
                Împreună cu Ministerul Învățământului, am realizat oficial
                primul curs de specializat în SEO care promite la finalizarea
                acestuia, să furnizeze toate informațiile de care aveți nevoie
                pentru a ajunge un specialist cu informații necesare a vă angaja
                fie în companiile de pe piață, fie pentru freelancing sau de ce
                nu, a vă crea propria companie. La finalizarea cursului, veți
                stăpâni informații extrem de importante în domeniu pe care le
                veți putea practica chiar din timpul cursului.
              </p>
            }
            button={<button className="btn btn-primary">Afla mai multe</button>}
          />
          <NumbersSection />
          <IconAndText
            icon={<Mobile2 />}
            heading={
              <>
                De ce să alegi <span className="text-primary">cursul</span>{' '}
                nostru
              </>
            }
            p={
              <p>
                Tomotiv s-a născut din dorința de a amprenta viitorul românesc
                în segmentul online. Tocmai de aceea, cursul basic de SEO nu
                promite îmbogățiri peste noapte ci garantează calitatea unor
                informații practice care să ajute orice cursant care se află la
                început de drum în domeniu, să imerseze, pătrundă și să
                înțeleagă în profunzime tot ce ține de domeniul acesta.{' '}
              </p>
            }
            button={<button className="btn btn-primary">Inscrie-te</button>}
          />
        </SectiuneGri>
        <HeadingAndCta
          heading={
            <>
              Vocea <span className="text-primary">Tomotiv</span> sunteți
              dumneavoastră.
            </>
          }
          button={<button className="btn btn-primary">Contacteaza-ne</button>}
        />
      </main>
    </Page>
  );
}
