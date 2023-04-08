import Image from 'next/image';
import React from 'react'
import { tw } from 'twind';
import {BsFillPencilFill} from 'react-icons/bs'
import styles from './card.module.css'
import { colors, typography } from '../../styles';
const Section2 = () => {
  return (
    <section>
      <h2 className={tw('text-white text-center font-bold text-base	')}>
        Primul curs SEO din România AUTORIZAT
      </h2>
      <span
        className={tw('block p-5 text-white text-center font-medium text-xs	')}
      >
        De acum te poți angaja cu diplomă recunoscută{' '}
      </span>
      <Image
        className={tw('block m-auto px-5')}
        src={'/assets/brands.png'}
        width={800}
        height={200}
      />
      <span
        className={tw('block p-5 text-white text-center font-bold text-base	')}
      >
        În doar 6 săptămâni poți ajunge Specialist SEO Autorizat
      </span>
      <div id='cardWrapper' className={tw('flex lg:flex-row w-10/12 flex-col gap-5 lg:w-4/6 content-center items-center m-auto')}>
      <Card icon={<BsFillPencilFill size={'2em'} color={colors.accent}/>} header={'Înveți SEO DE LA ZERO'} content={'Indiferent de nivelul tău în SEO, îți sunt explicate de la zero toate informațiie de care ai nevoie.'} />
      <Card icon={<BsFillPencilFill size={'2em'} color={colors.accent}/>} header={'Înveți SEO DE LA ZERO'} content={'Indiferent de nivelul tău în SEO, îți sunt explicate de la zero toate informațiie de care ai nevoie.'} />
      <Card icon={<BsFillPencilFill size={'2em'} color={colors.accent}/>} header={'Înveți SEO DE LA ZERO'} content={'Indiferent de nivelul tău în SEO, îți sunt explicate de la zero toate informațiie de care ai nevoie.'} />
      
      </div>
    </section>
  );
}




 const Card = ({icon, header, content}) => {
  return (
    <div
      className={`${tw('flex flex-col items-center rounded-3xl gap-3	border p-5')} ${
        styles.card
      }`}
    >
      {icon}
      <h5 className={tw('uppercase font-semibold text-white text-lg text-center')}>
        {header}
      </h5>
      <p className={typography.p2}>{content}</p>
    </div>
  );
}


export default Section2