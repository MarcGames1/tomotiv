import React, { useEffect, useState } from 'react'
import Background from './background'
import { tw } from 'twind'
import styles from './section3.module.css'
import {IoMdWalk} from 'react-icons/io'
import {button, colors, typography} from '../../styles'
import Image from 'next/image'
import { BsRocket } from 'react-icons/bs'
import { Button } from '../ux'
import { AnimatedCircle } from '../decoratiuni'

const Section3 = () => {
  return (
    <Background>
      <div
        className={`${styles.mainContainer} ${tw(
          'py-52 h-screen grid gap-3   lg:mx-20 lg:grid-cols-5'
        )}`}
      >
        <div
          className={`${styles.leftContainer} ${tw(
            'lg:col-span-3 mb-40	flex flex-col gap-4 md:p-0 p-10 md:flex-row'
          )}`}
        >
          <div className={tw('w-full flex flex-col justify-center gap-4')}>
            <CardComponent
              image={'/assets/s3Cards/school.jpg'}
              
            >
              <GlassMessage
                whiteTheme={true}
                span1={<>12 Module</>}
                span2={<>100% succes</>}
                subtitlu={<>6 săptămâni</>}
                titlu={<>Diploma Acreditata</>}
              />
            </CardComponent>
            <CardComponent
              leftRounded
              image={'/assets/s3Cards/laptop.jpg'}
              
            >
              <GlassMessage
                whiteTheme={true}
                span1={<>12 Module</>}
                span2={<>100% succes</>}
                subtitlu={<>6 săptămâni</>}
                titlu={<>Diploma Acreditata</>}
              />
            </CardComponent>
          </div>
          <div className={tw('flex flex-col gap-4 justify-center')}>
            <AnimatedCircle styles={styles.roundWrapper} />
            <CardComponent
              
              paragraf={
                'Nu este nevoie să te încurci. Ai la dispoziție mentori care te pot ajuta să înțelegi mai bine orice legat de SEO,'
              }
              heading={
                <>
                  <IoMdWalk size={'2em'} color="currentColor" />
                  Mentori la dispoziția ta
                </>
              }
            >
              {' '}
              <GlassMessage
                whiteTheme={true}
                titlu={<>Susținere</>}
                subtitlu={'mai mult de 6 săptămâni'}
                span1={'rămâi în comunitate'}
                span2={'100% succes'}
              />
            </CardComponent>

            <GlassMessage
              whiteTheme={true}
              titlu={<>Un nou skill</>}
              subtitlu={'Ai șansa să devii Specialist SEO'}
              span1={'6 săptămâni'}
              span2={'100% succes'}
            />

            <CardComponent image={'/assets/s3Cards/bust.webp'} cardHeight={600}>
              <GlassMessage
                whiteTheme={false }
                titlu={<>Angajare Imediata</>}
                subtitlu={'Posibilitatea de angajare oriunde '}
                span1={'+pregatire interviu'}
                span2={'100% succes'}
              />
            </CardComponent>
          </div>
        </div>
        <div className={` ${tw('lg:col-span-2  w-full h-full')}`}>
          <RightSideComponent />
        </div>
      </div>
    </Background>
  );
}

export default Section3



const CardComponent = ({
  image = "" || undefined, 
  cardHeight = NaN, 
  heading =undefined, 
  paragraf = <></> || undefined, 
  children, 
  leftRounded=false
}) =>{

const roundedR = 'rounded-tr-3xl'
const roundedL = 'rounded-tl-3xl'

  return (
    <div
      className={`
      ${tw(
        `  ${
          cardHeight
            ? `w-full h-[${cardHeight}px]`
            : 'sm:min-h-[300px]  min-h-[300px] h-full'
        } grid  items-center justify-items-center   p-3`
      )} 
      ${styles.GlassComponent}
      `}
    >
      {image && (
        <Image
          className={` ${tw(
            `${
              leftRounded ? roundedL : roundedR
            } rounded-b-3xl w-full h-full relative`
          )}`}
          src={image}
          fill
        />
      )}
      <h5
        className={` ${tw(
          'flex  flex-row items-start uppercase text-white sm:text-xl md:text-2xl	font-bold	my-3 text-center  items-center'
        )}`}
      >
        {heading}
      </h5>
      <p className={`${tw('')} ${typography.p}`}>{paragraf}</p>

      <div className={tw('self-end w-full ')}>{children}</div>
    </div>
  );
}

const GlassMessage = ({titlu, subtitlu, span1, span2, whiteTheme}) =>{

  

  const [stilTitlu, setStilTitlu] = useState('text-slate-50');
  const [stilSubTitlu, setStilSubTitlu] = useState('text-slate-200');
  const [stilSpan, setStilSpan] = useState('text-slate-300');


  useEffect(() => {
    if (whiteTheme === false) {
      setStilTitlu(tw('text-stone-950'));
      setStilSubTitlu(tw('text-stone-900'));
      setStilSpan(tw('text-stone-800'));
    } else {
      setStilTitlu(tw('text-stone-50'));
      setStilSubTitlu(tw('text-stone-200'));
      setStilSpan (tw('text-stone-300	'));
    }
  }, []);
  const messageStyles = {
    titlu: {
      white: tw('text-slate-950'),
      black: tw('text-slate-50'),
    },
    subtitlu: {
      white: 'text-slate-900',
      black: 'text-slate-200',
    },

    span: { white: 'text-slate-800', black: 'text-slate-300	' },
  };



  return (
    <div
      className={` ${tw(`  py-3 px-4  flex flex-col  w-full`)}  ${
        styles.message
      }`}
    >
      <span
        className={tw(`block font-bold uppercase text-center ${stilTitlu}`)}
      >
        {titlu}
      </span>
      <span
        className={tw(
          `${stilSubTitlu} text-center font-semibold`
        )}
      >
        {subtitlu}{' '}
      </span>
      <div className={tw('flex w-full flex-row justify-around')}>
        <span className={`${tw(`block font-bold uppercase ${stilSpan}`)}   `}>
          {span1}{' '}
        </span>
        <span className={`${tw(`block font-semibold uppercase ${stilSpan}`)} `}>
          {span2}
        </span>
      </div>
    </div>
  );
}


const RightSideComponent = () =>{

  return (
    <div
      className={tw(
        'm-3  flex		w-full h-1/2 text-center	 flex-col justify-around 	'
      )}
    >
      <BsRocket className={tw('self-center')} size={'4em'} color={'#EE4444'} />
      <h2 className={typography.s4heading}>De la ZERO la SUPER SEO.</h2>
      <p className={typography.p2}>
        Te ajutăm să îți dezvolți una din cele mai căutate abilități în Digital
        Marketing. După cele 6 săpătmâni practice vei reuși să înțelegi, aplici
        și să profesezi ca specialist SEO cu ajutorul unei diplome autorizate.{' '}
      </p>
      <Button className={`${button.secondary} `}>Descopera</Button>
      <br />
      <p className={typography.p2}>
        Dezvoltă-ți abilitățile de digital marketing în cea mai bună perioadă a
        erei digitale.
      </p>
    </div>
  );
}