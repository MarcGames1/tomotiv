'use client';
import React, {useEffect, useState} from 'react';
import Page from '@/app/PageLayout';
import CountdownTimer from '@/components/CountdownTimer';
import useCourseData from '@/app/admin/adminHooks/useCourseData';
import { formatDate, calculateWeeksBetweenDates } from '@/helpers/helpers';
import CardList6 from '@/app/servicii/componenteServicii/CardList6';


import {ImCheckmark} from 'react-icons/im'
import {BiTimer} from 'react-icons/bi'
import {BsGraphUpArrow} from 'react-icons/bs'

const beneficii = {
  heading: (
    <h2 className="m-10 lead font-bold text-3xl text-center">
      <span className="text-primary">Curs SEO</span> care Te ajuta sa aduci
      site-uri in primele 3 rezultate organice{' '}
    </h2>
  ),
  elemente: [
    {
      heading: <h3 className="font-bold text-primary">Ușor</h3>,
      descriere: (
        <p>
          Curs complet de SEO organizat și pe înțelesul tuturor (timp de studiu
          și execuție aprox. 1 - 3 ore/zi).
        </p>
      ),
      icon: <ImCheckmark size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Rapid</h3>,
      descriere: (
        <p>
          În 7 săptămâni înveți o abilitate care-ți va permite să te angajezi
          oriunde sau să îți deschizi firmă
        </p>
      ),
      icon: <BiTimer size={'3em'} />,
    },
    {
      heading: <h3 className="font-bold text-primary">Eficient</h3>,
      descriere: (
        <p>Încă din prima zi de curs vei putea înțelege cu ce se mănâncă SEO</p>
      ),
      icon: <BsGraphUpArrow size={'3em'} />,
    },
  ],
};



const page = () => {


  const { courseData, saveCourseState, getCourseData, isLoading, error } =
    useCourseData('curs-seo');

  const [deschisInscrieri, setDescrisInscrieri] = useState(false)
  const [stopInscrieri, setStopInscrieri] = useState(new Date() - 1);
  const [locuriDisponibile, setLocuriDisponibile] = useState(NaN);
  const [inscrisiEditiaCurenta, setInscrisiEditiaCurenta] = useState(NaN);
  const [dataIncepereCurs, setDataIncepereCurs] = useState(null);
  const [dataFinalCurs, setDataFinalCurs] = useState(null);
  

 const initialiseCourseData = (courseData) => {
   courseData &&
     courseData.stopInscrieri &&
     setStopInscrieri(courseData.stopInscrieri);
   
    courseData && courseData.deschisInscrieri && setDescrisInscrieri(courseData.deschisInscrieri);
     courseData &&
       courseData.locuriDisponibile &&
       setLocuriDisponibile(courseData.locuriDisponibile);

       courseData &&
         courseData.inscrisiEditiaCurenta &&
         setInscrisiEditiaCurenta(courseData.inscrisiEditiaCurenta); 

         courseData &&
           courseData.dataIncepereCurs &&
           setDataIncepereCurs(courseData.dataIncepereCurs);

             courseData &&
               courseData.dataFinalCurs &&
               setDataFinalCurs(courseData.dataFinalCurs);


 };


const handleAction = () =>{

  const handleInscriere = () =>{
    console.log('HandleInscriere')
  }


  const handleAsteapta = () =>{
    console.log('HandleAsteapta')
  }



  deschisInscrieri ? handleInscriere() : handleAsteapta();
  
}

 const setCtaMessage = () =>{
  return deschisInscrieri ? "Inscrie-te Acum!" : 'Intra pe lista de asteptare';
 }



       useEffect(() => {
         if (isLoading || error) return;
          initialiseCourseData(courseData)



       }, courseData);
  return (
    <Page>
      <div className="w-full h-[5rem] bg-secondary flex items-center flex-row gap-5 justify-around px-5 my-5">
        <span className="text-center text-base-100 text-xl ">
          Înscrie-te până pe {formatDate(stopInscrieri)}!
        </span>

        <CTABTN handleAction={handleAction} setCtaMessage={setCtaMessage} />
      </div>
      <section className="contaiener w-8/12 block m-auto p-5 bg-base-100">
        <div className="leading-9">
          <div className=" flex flex-col gap-5 items-center justify-around w-full 	 ">
            <span className="text-center text-lg tracking-wide	 ">
              SEOtropolis
            </span>
            <p className="text-lg font-semibold	">
              {formatDate(dataIncepereCurs)} {formatDate(dataFinalCurs)}
            </p>
            <p className="text-center text-lg">
              Pentru visătorii care vor să se educe sau să vândă mai mult
            </p>
          </div>
          <h1 className="text-3xl lg:text-5xl font-bold text-center p-5">
            <span className="text-primary">
              {' '}
              Învață SEO și dezvoltă-ți un super skill
            </span>{' '}
            în doar{' '}
            {calculateWeeksBetweenDates(
              new Date(dataFinalCurs),
              new Date()
            )}{' '}
            săptămâni
          </h1>
          <p className="text-center leading-9 tracking-wider text-xl 	">
            Înveți să îți optimizezi websiteul în topul rezultatelor afisate de
            GOOGLE
          </p>
          <p className="text-center leading-9 tracking-wide text-lg italic 	">
            Un curs susținut de instructori cu experiență de lucru cu peste 100
            de afaceri
          </p>
        </div>
        <div>
          <CountdownTimer targetDate={stopInscrieri} />
        </div>
      </section>
      <section className="contaiener w-8/12  m-auto p-5 flex flex-col items-center gap-5 ">
        <CardList6 {...beneficii} />
        <CTABTN handleAction={handleAction} setCtaMessage={setCtaMessage} lg />

        {deschisInscrieri ? null : (
          <div className="alert alert-error text-center">Înscrierile sunt închise! </div>
        )}
      </section>
      Cursul incepe pe data de {formatDate(dataIncepereCurs)}
      Cursul se incheie pe data de {formatDate(dataFinalCurs)}
    </Page>
  );
};

export default page;




const CTABTN = ({ handleAction, setCtaMessage, lg=false }) => {
 return (
   <button onClick={handleAction} className={`btn btn-primary text-base-100 ${lg ? 'btn-lg' : null}`}>
     {setCtaMessage()}
   </button>
 );
};