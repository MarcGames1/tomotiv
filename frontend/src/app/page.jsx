import HeroCarousel from '@/components/Carousel/HeroSection/HeroCarousel'
import SectiuneGri from '@/components/SectiuneGri'
import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';
import Card1 from '@/components/LayoutComponents/cardSectionComponents/Card1/Card1';
import {IoIosPeople} from 'react-icons/io'
import {BsBuildings} from 'react-icons/bs'
import GridColsd10 from '@/components/GridColsd10';
import Sectiune3Card from '@/components/LayoutComponents/cardSectionComponents/sectiune3Card';
import CardContainer from '@/components/LayoutComponents/cardSectionComponents/CardContainer';
import Page from './PageLayout';
import Mobile_Logi from '@/components/svg/mobile_logi';
import IconAndText from '@/components/IconAndText/IconAndText';
import HeadingAndCta from '@/components/HeadingAndCta/HeadingAndCta';

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
              Primul curs autorizat <span className="text-primary">SEO</span>{' '}
              din Romania
            </h2>
            <p>
              Tomotiv este prima companie care reușește să formeze cursuri de
              SEO și să ofere acreditare de la Minsiterul Învățăturii prin care
              orice cursant care termină cursul basic, se poate angaja mai apoi
              ca specialist SEO. Cu alte cuvinte, grație diplomei recunoscute
              național veți putea practica fără probleme la orice companie.
            </p>
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
                <IoIosPeople className="text-primary" size={'5em'} />
              </Card1>
            </CardContainer>
          </Sectiune3Card>
          <IconAndText
            icon={<Mobile_Logi />}
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
