import React from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import { typography } from '@/styles'
const HeroSection = () => {
  return (<>
    <section className={styles.heroSection}>
      <Image className={styles.image} fill src={'/assets/hero-image.png'} />
      <div className={styles.content}>
        <h1 className={`${styles.heading} ${typography.h1} `}>Ai Toate Motivele să reușești</h1>
      </div>
    </section>
  <section className={styles.heroSection}>

  </section>
  </>
  );
}

export default HeroSection