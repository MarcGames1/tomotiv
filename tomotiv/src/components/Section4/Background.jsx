import React from 'react'
import styles from './section4.module.css'
import { motion } from 'framer-motion';
const Background = ({children}) => {
 
  return (
    <section className={styles.background}>
      <div
        className={styles.bground}
        ></div>
      {children}
    </section>
        
  );
}

export default Background