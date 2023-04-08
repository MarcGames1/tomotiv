import Image from 'next/image';
import React, {useEffect, useState} from 'react'
import styles from './section3.module.css'
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';



const Background = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);


  const handleVisibilityChange = () => {
    setIsVisible(true);
  };
  
  
  useEffect(()=>{
    if(!isVisible){
      setIsVisible(false);
    }

  }, [isVisible])
  
  return (
    <section className={styles.sectionBg}>

      <VisibilitySensor onChange={handleVisibilityChange}>
        <>
      <motion.div
        key={'section3 bgImage'}
        initial={{ opacity: 0 }}
        animate={{
          opacity: isVisible ? [ 0.3, 0.6, 0.9, 1] : [0],
        }}
        exit={{ opacity: 0 }}
        
        
        
        className={styles.bground}
        >
       
      </motion.div>
      {children}
          </>
          </VisibilitySensor>
    </section>
  );
}

export default Background