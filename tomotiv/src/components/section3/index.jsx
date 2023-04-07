import React from 'react'
import Background from './background'
import { tw } from 'twind'
import styles from './section3.module.css'
import {IoMdWalk} from 'react-icons/io'
import {typography} from '../../styles'

const Section3 = () => {
  return (
    <Background>
      <div
        className={`${styles.mainContainer} ${tw(
          'h-screen grid  lg:grid-cols-3'
        )}`}
      >
        <div
          className={`${styles.leftContainer} ${tw(
            'lg:col-span-2	flex items-center'
          )}`}
        >
          <CardComponent
            icon={<IoMdWalk size={'1em'} color="currentColor" />}
            paragraf={
              'Nu este nevoie să te încurci. Ai la dispoziție mentori care te pot ajuta să înțelegi mai bine orice legat de SEO,'
            }
            heading={'Mentori la dispoziția ta'}
          >
            {' '}
            <GlassMessage
              titlu={'Susținere'}
              subtitlu={'mai mult de 6 săptămâni'}
              span1={'rămâi în comunitate'}
              span2={'100% succes'}
            />
          </CardComponent>
          <GlassMessage />
        </div>
        <div
          className={`${styles.rightContainer} ${tw('lg:col-span-1')}`}
        ></div>
      </div>
    </Background>
  );
}

export default Section3



const CardComponent = ({icon, heading, paragraf, children}) =>{

  return (
    <div className={`${tw(` p-3`)} ${styles.GlassComponent}`}>
      <h5
        className={` ${tw(
          'flex text-white text-2xl	font-bold	my-3 text-center  items-center text-center '
        )}`}
      >
        {icon}
        {heading}
      </h5>
      <p className={typography.p}>{paragraf}</p>
      <br />
      {children}
    </div>
  );
}

const GlassMessage = ({titlu, subtitlu, span1, span2}) =>{

  return (
    <div className={`${styles['roll-in-right']} ${tw(` p-3 flex flex-col w-full`)}  ${styles.message}`}>
      <span
        className={tw('block font-semibold uppercase text-center text-black')}
      >
        {titlu}
      </span>
      <span className={`${styles.glassSubtitle}`}>{subtitlu} </span>
      <div className={tw('flex w-full flex-row justify-around	bg-color-red')}>
        <span
          className={`${tw('block font-bold uppercase')} ${styles.span}`}
        >
          {span1}{' '}
        </span>
        <span
          className={`${tw('block font-semibold uppercase')} ${styles.span}`}
        >
          {span2}
        </span>
      </div>
    </div>
  );
}