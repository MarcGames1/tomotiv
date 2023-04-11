import React from 'react'
import { tw } from 'twind'
import Background from './Background'
import {background} from './section4.module.css'
import { typography, button, colors } from '../../styles'
import {AiOutlineTrophy} from 'react-icons/ai'
import Image from 'next/image'

import { Button, PrimaryButton } from '../ux';
import styles from './section4.module.css';

const Section4 = () => {
  return (
    <Background>
      <div className={`${styles.mainContainer} ${tw('p-12')}`}>
        <div
          className={tw('flex flex-col-reverse items-center gap-5 lg:flex-row-reverse')}
        >
          <RightSide />
          <div className={''}>
            <LeftSide />
          </div>
        </div>
      </div>
    </Background>
  );
}

export default Section4




const LeftSide = () => {
  return (
    <div
      className={tw('flex z-10 flex-col gap-5 justify-between py-20 items-center')}
    >
      <AiOutlineTrophy size={'4em'} color={colors.blue} />
      <h2 className={typography.s4heading}>De ce să alegi cursul nostru de SEO</h2>
      <p className={typography.p}>
        Tomotiv este o companie născută de doi tineri care își doresc să schimbe
        și să formeze generații noi de tineri care să cucerească mediul digital
        prin inteligența lor. Ne propunem ca până în 2030 să ajutam peste 2000
        de persoane să învețe digital marketing și să profeseze în domeniu.
      </p>
      <PrimaryButton />
      <span className={`${tw('block w-full py-10')} ${styles.line}`}>
        {' '}
        <hr  />
      </span>

      <span className={`${tw(' ')} ${styles.line}`}>
        Tu ești schimbarea în mediul online.
      </span>
    </div>
  );
}




const RightSide = () => {
  return (
    <div
      className={tw('flex flex-col relative gap-5 justify-between py-20 items-center')}
    >
     <div className={styles.pic}>
      {/* <Image fill src={'/assets/seo.jpg'} /> */}
     </div>
     <span className={`${tw('z-10' )} ${typography.s4heading}`}>Super SEO de la ZERO</span>
     <div className={styles.bg}></div>
    </div>
  );
}



