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
import { servicii, cumColaboramDate, autori } from '@/dateStatice';
import CumVeiColaboraCuNoi from '@/components/Colaborare/CumVeiColaboraCuNoi';
import Link from 'next/link';
import Image from 'next/image';
const {alex, laura} = autori



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
            <Grid3x2 hover data={servicii} />
          </div>
          <div className="m-10 prose lg:prose-xl prose-lead max-w-none">
            <CumVeiColaboraCuNoi items={cumColaboramDate} />
          </div>
          <ValorileCompaniei />
        </SectiuneGri>
        <SectiuneCursSeo />

<Echipa />

        <HeadingAndCta
          heading={
            <>
              Vocea <span className="text-primary">Tomotiv</span> sunteți
              dumneavoastră.
            </>
          }
          button={
            <Link href={'/contact'}
               className="btn btn-primary">Contacteaza-ne
            </Link>
          }
        />
      </main>
    </Page>
  );
}



const ValorileCompaniei = () =>{
  return (
    <>
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
                  </>
  )
}



const Echipa = () =>{
  return (
    <>
      <h2 className="prose block m-auto my-10 lead font-bold text-3xl text-center">
        Fa cunostinta cu echipa din spatele{' '}
        <span className="text-primary">agentiei de marketing online</span>,
        Tomotiv
      </h2>

      <div className="grid lg:grid-flow-col lg:grid-cols-2  items-center justify-items-center w-full h-full ">
        <MembruEchipa {...laura} />
        <MembruEchipa {...alex} />
      </div>
    </>


        
  );
}


const MembruEchipa = ({nume, prenume, poza, specializare, functie, contact}) =>{



  return (
    <>
      <div className=" w-full justify-center m-auto text-center">
        <Avatar alt={`poza ${prenume} ${nume} ${functie}`} src={poza} />
        <div className="flex flex-col m-auto text-center ">
          <h5 className="text-center font-extrabold my-3 ">
            {prenume} {nume}
          </h5>
          <p className="font-bold my-3">{functie}</p>
          <p className=" mx-10">{specializare}</p>
          <div className="my-3">
            <Link
              href={`/echipa/${prenume.toLowerCase()}-${nume.toLowerCase()}`}
            >
              {' '}
              <button className="btn btn-secondary">Afla mai mult</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}


const Avatar = ({src, alt}) =>{
  return (
    <>
      <div className="avatar m-auto w-full block">
        <div className="h-1/2 my-10 w-1/2 m-auto block">
          <img
            src={src}
            style={{ objectFit: 'cover' }}
            alt={alt}
          />
        </div>
      </div>
    </>
  );
}

const SectiuneCursSeo = () =>{

  return (
    <>
      <IconAndText
        icon={<Mobile_Logi />}
        heading={
          <>
            În premieră, <span className="text-primary">primul</span> curs
            de SEO în Cadrul <span className="text-primary">Agentiei de Marketing Online</span> - Tomotiv.
          </>
        }
        p={
          <>
            <p>
              In premiera, lansam cel mai nou si cel mai complex curs de SEO
              adresat tuturor celor care isi doresc sa invete SEO la un nivel
              mai mult decat Basic. Ceea ce diferentiaza acest curs de altele,
              este tocmai expertiza, timpul si informatiile atat de utile pentru
              toti cei care isi doresc sa invete un skill de la zero.
            </p>
            <p>
              Am alocat toate cunostintele, experientele acumultate de-a lungul
              timpului si le-am compactat intr-un curs care nu numai ca promite
              sa te invete SEO #pebune, dar te va ajuta sa devii capabil sa
              profesezi imediat dupa finalizare, oriunde vrei tu si la orice
              companie.
            </p>
          </>
        }
        button={
          <Link href={'/cursuri/curs-seo'} className="btn btn-primary">
            Afla mai multe
          </Link>
        }
      />
    </>
  );
}