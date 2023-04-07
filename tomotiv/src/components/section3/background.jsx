import Image from 'next/image';
import React from 'react'
import styles from './section3.module.css'
const Background = ({children}) => {
  return (
    <section className={styles.sectionBg}>
      <Image className={styles.bground} width={300} height={300} src={'/assets/Round.png'} />
      {children}
    </section>
  );
}

export default Background