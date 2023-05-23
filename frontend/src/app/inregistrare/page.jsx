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
    <main className=" w-full">
      
        <SectiuneAlba className="block w-full p-5 mx-auto prose">
          <h1 className="text-center m-6 ">Inregistrare</h1>
          <SignUpForm />
          <span className='prose-h2 text-secondary'>Ai deja cont? </span>
        </SectiuneAlba>
        
    </main>
  );
}
