import React from 'react'
import { tw } from 'twind';
import Image from 'next/image';
import { colors, links, typography  } from '../../styles';
import { ImLinkedin2 } from 'react-icons/im';
import { IoLogoYoutube } from 'react-icons/io';
import { CiFacebook, CiInstagram } from 'react-icons/ci';
import { FaTiktok } from 'react-icons/fa';
import {TbWorldWww} from 'react-icons/tb'

import { autori } from '../../dateStatice';
import Link from 'next/link';

const { alex, laura} = autori


const DespreSection = () => {
  return (
    <section className={tw('flex flex-col items-center gap-3')}>
      <h2 className={typography.p}>
        Fa Cunostinta cu Noi
      </h2>
      <span
        className={typography.s4heading}
      >
        Echipa din spatele proiectului Tomotiv{' '}
      </span>
      <div className={tw('container  w-full h-full flex items-center gap-3 justify-center')}>
       
        
        <MembruEchipa props={alex} />
        <MembruEchipa props={laura}/>
       
      </div>
    </section>
  );
}

export default DespreSection


const MembruEchipa = ({props}) =>{
 const {nume, prenume, poza, functie, contact } = props

 const styles = {
  heading: `${typography.cardHeading}  ${links}`,
  functie: `${typography.p2} ${tw('font-bold')}`,
  contact: `${tw('flex flex-row  justify-around')}`,
 }


    return (
      <div
        className={`${tw(
          'container  flex flex-col gap-3 justify-center items-center	justify-items-center'
        )} 'dotted'`}
      >
        <Image
          alt={`Poza profil cu ${prenume} ${nume} ${functie}`}
          width={300}
          height={300}
          src={poza}
        />
        <div>
          <Link
            className={styles.heading}
            href={`/echipa/${prenume}-${nume}`.toLowerCase()}
          >
            {prenume} {nume}
          </Link>
          <div className={styles.functie}>{functie}</div>
          <div className={styles.contact}>
            <a href={contact.linkedin}>
              <ImLinkedin2 color={colors.accent} size={'2em'} />
            </a>
            <a href={contact.facebook}>
              <CiFacebook color={colors.accent} size={'2em'} />
            </a>
            <a href={contact.instagram}>
              <CiInstagram color={colors.accent} size={'2em'} />
            </a>
            <a href={contact.tikTok}>
              <FaTiktok color={colors.accent} size={'2em'} />
            </a>
            <a href={contact.website}>
              <TbWorldWww color={colors.accent} size={'2em'} />
            </a>
          </div>
        </div>
      </div>
    );
}