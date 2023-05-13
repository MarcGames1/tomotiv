import React, {} from 'react'
import styles from './section3.module.css'
import { motion } from 'framer-motion';


const Background = ({children}) => {
 
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <section className={styles.sectionBg}>
        <div> {children}</div>
      </section>
    </motion.div>
  );
}

export default Background