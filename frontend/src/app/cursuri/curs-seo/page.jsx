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

import Mesajelement from '@/components/MesajElement/MesajElement';

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




const CursSeoSellPage = () => {


  const { courseData, saveCourseState, getCourseData, isLoading, error } =
    useCourseData('curs-seo');

  const [deschisInscrieri, setDescrisInscrieri] = useState(false)
  const [stopInscrieri, setStopInscrieri] = useState(new Date() - 1);
  const [locuriDisponibile, setLocuriDisponibile] = useState(NaN);
  const [inscrisiEditiaCurenta, setInscrisiEditiaCurenta] = useState(NaN);
  const [dataIncepereCurs, setDataIncepereCurs] = useState(null);
  const [dataFinalCurs, setDataFinalCurs] = useState(null);
  

  const bonusuri = {
    heading: (
      <h2 className="m-10 lead font-bold text-3xl text-center">
        Înscrie-te în curs până pe{' '}
        <span className="underline underline-offset-8">
          {formatDate(stopInscrieri)}
        </span>{' '}
        și{' '}
        <span className="text-primary">
          primești automat 10 Bonusuri Exclusive:
        </span>
      </h2>
    ),
    elemente: [
      {
        heading: (
          <h3 className="font-bold text-primary">
            „Cum ajuți un website să crească în doar 3 luni”
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              {' '}
              Un webinar în care vei învăța cum să optimizezi un website fără să
              trebuiască să bagi bani sau să apelezi la nenumărate trucuri care
              ar putea să îți pună în pericol afacerea.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            „Cum să fii primul în motoarele de cătuare pe Google”
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un webinar înregistrat în care înveți cum să ajungi primul atunci
              când oricine îți caută afacerea pe internet.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Cum îți găsești primii clienți ca freelancer.
          </h3>
        ),
        descriere: (
          <p>
            Orice inceput are provocarile lui asa ca eu sunt aici sa te ajut
          </p>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Cum să îți găsești un job după ce termini cursul de SEO{' '}
          </h3>
        ),
        descriere: (
          <p>
            Orice inceput are provocarile lui asa ca eu sunt aici sa te ajut
          </p>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">Proceduri și șabloane </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              iti voi da template-urile si procedurile pe care le folosesc eu -
              Proceduri testate si imbunatatite constant de mine
            </p>
            <p>
              vei înțelege concret cum să respecți anumite proceduri și șabloane
              astfel încât să te bucuri de cele mai bune rezultate
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            „Ultimul, dar și cel dintâi”{' '}
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un workshop de aproape 2 ore în care îți explic procesul prin care
              poate trece un website care este la început de drum dar care își
              dorește să ajungă primul pe Google.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Exemple de Keyword Research exact ca la carte
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un material complex care te va ajuta să înțelegi faptul că un
              keyword research îți poate ușura mai apoi munca foarte mult.
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Interviu cu un specialist în Google Ads
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>vei învăța despre importanța SEO și în alte domenii conexe</p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Cum treci peste blocajul începătorului în SEO{' '}
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              Oricune a avut acest blocaj la inceput, e normal, trebuie doar sa
              stii ca nu esti singurul
            </p>
          </div>
        ),
      },
      {
        heading: (
          <h3 className="font-bold text-primary">
            Mini Ghid de Campanie Google Ads 
          </h3>
        ),
        descriere: (
          <div className="prose">
            <p>
              un ghid prin care înveți despre Google Ads, câte tipuri de
              campanii există și legătura strânsă dintre SEO și Google Ads.{' '}
            </p>
          </div>
        ),
      },
    ],
  };



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
              {formatDate(dataIncepereCurs)} - {formatDate(dataFinalCurs)}
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
          <div className="alert alert-error text-center">
            Înscrierile sunt închise!{' '}
          </div>
        )}
        <p className="text-lg font-semibold	">
          {' '}
          Desfășurare online -{' '}
          <span>
            {formatDate(dataIncepereCurs)} - {formatDate(dataFinalCurs)} -{' '}
            {calculateWeeksBetweenDates(new Date(dataFinalCurs), new Date())}{' '}
            saptamani
          </span>
        </p>
        <div className="container border-8 border-base-300/100">
          <Mesajelement
            animation="animate-fade-up"
            start
            text={
              <>
                Lecții video și text, <br /> Feedback personalizat.
              </>
            }
          />
          <Mesajelement
            animation="animate-fade-down "
            text={<>Grup privat Facebook</>}
            delay={'animate-delay-50'}
          />
          <Mesajelement
            animation="animate-fade-left "
            start
            delay={'animate-delay-75'}
            text={<>Tehnici și secrete testate</>}
          />
          <Mesajelement
            animation="animate-fade-right "
            delay={'animate-delay-100'}
            text={
              <> Înveți research, copywriting și bazele marketingului digital</>
            }
          />
        </div>
        <div className="leading-9 prose">
          <p className="text-center text-lg tracking-wide">
            Perioadă în care primești feedback personalizat de la mentori este
            de 6 săptămâni, dar ai acces la acest curs pe viață, cu toate
            actualizările lui, și îl poți parcurge oricând în ritmul tău.
          </p>
          <p className="text-center text-lg tracking-wide">
            Toate lecțiile (inclusiv webinariile live) sunt urcate pe o
            platforma online, deci nu trebuie să-ți adaptezi programul pentru a
            participa la curs.
          </p>
          <p className="text-center text-lg tracking-wide">
            Cursul Este actualizat constant astfel tu vei fi la curent cu
            ultimile noutati din industria SEO
          </p>
        </div>
      </section>
      <section className=" bg-gradient-to-bl from-transparent via-base-300 to-transparent p-5">
        <CardList6 numbered {...bonusuri} />
      </section>
      <section className="   p-5">
        <div className="m-auto text-center">
          <h2 className="text-5xl font-bold">+ un SUPER BONUS!</h2>
          <h2 className="text-4xl font-bold underline text-primary">
            Ședință săptămânală de consultanță cu un mentor SEOtropolis
          </h2>
          <p className="py-6">
            Ai parte de un apel video săptămânal (15 minute) cu un mentor pentru
            a te asigura că te îndrepți în direcția potrivită;
          </p>
          <p className="py-6">
            Primești suport și sfaturi pentru a-ți găsi primul client și pentru
            a te asigura că-i livrezi cele mai bune materiale;
          </p>
          <p className="py-6">
            Beneficiezi de experiența unui Expert SEO care a trecut exact prin
            ce treci tu;
          </p>
          <CTABTN
            lg
            handleAction={handleAction}
            setCtaMessage={setCtaMessage}
          />
        </div>
      </section>
      <section>
        <div className=" text-center my-10 p-10 bg-gradient-to-bl from-transparent via-base-300 to-transparent">
          <h2 className="m-10 lead font-bold text-3xl text-center">
            Primești <span className='text-primary'>feedback personalizat</span> de la un mentor
          </h2>
          <p className='lead-9 text-lg'>
            Astfel încât să fii sigur că te afli tot timpul pe drumul cel bun în
            procesul de învățare.
          </p>
        </div>
      </section>
      Cursul incepe pe data de {formatDate(dataIncepereCurs)}
      Cursul se incheie pe data de {formatDate(dataFinalCurs)}
    </Page>
  );
};

export default CursSeoSellPage;




const CTABTN = ({ handleAction, setCtaMessage, lg=false }) => {
 return (
   <button onClick={handleAction} className={`btn btn-primary text-base-100 ${lg ? 'btn-lg' : null}`}>
     {setCtaMessage()}
   </button>
 );
};



