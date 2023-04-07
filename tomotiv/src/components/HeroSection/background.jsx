import React from 'react';
import styles from './index.module.css';



const HeroSectionBG = ({children}) => {
  return (
    <>
      <section className={styles.heroSection}>
        <div className={styles.background}>
          
        </div>
        {children}
      </section>
    </>
  );
};

export default HeroSectionBG;