import React from 'react'
import { tw } from 'twind'
import Background from './Background'
import {background} from './section4.module.css'
import { typography, button, colors } from '../../styles'
import {AiOutlineTrophy} from 'react-icons/ai'


import { Button, PrimaryButton } from '../ux';
import styles from './section4.module.css';

const index = () => {
  return (
    <Background>
      <div className={styles.mainContainer}>
        <div className={tw('flex flex-col items-center')}>
          <AiOutlineTrophy size={'4em'} color={colors.blue} />
          <h2 className={typography.h1}>De ce să alegi cursul nostru de SEO</h2>
          <p className={typography.p}>
            Tomotiv este o companie născută de doi tineri care își doresc să
            schimbe și să formeze generații noi de tineri care să cucerească
            mediul digital prin inteligența lor. Ne propunem ca până în 2030 să
            ajutam peste 2000 de persoane să învețe digital marketing și să
            profeseze în domeniu.
          </p>
         <PrimaryButton />
        </div>
      </div>
    </Background>
  );
}

export default index