import HeroCarousel from '@/components/Carousel/HeroSection/HeroCarousel'
import SectiuneGri from '@/components/SectiuneGri'
import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';
import Card1 from '@/components/LayoutComponents/cardSectionComponents/Card1/Card1';
import {IoIosPeople} from 'react-icons/io'
import GridColsd10 from '@/components/GridColsd10';
import Sectiune3Card from '@/components/LayoutComponents/cardSectionComponents/sectiune3Card';
import CardContainer from '@/components/LayoutComponents/cardSectionComponents/CardContainer';
import SignInForm from './forms/SignInForm';
import SignUpForm from './forms/SignUpForm';

export default function Inregistrare() {
  return (
    <main className="">
      <GridColsd10 cols={8}>
        <SectiuneAlba className="grid-col-span-3 prose">
          <h1 className="text-center m-6 ">Inregistrare</h1>
          <SignInForm />
        </SectiuneAlba>
        <SectiuneAlba className="grid-col-span-3 prose">
          <h1 className="text-center m-6 ">Autentificare</h1>
          <SignUpForm />
        </SectiuneAlba>
      </GridColsd10>
    </main>
  );
}
