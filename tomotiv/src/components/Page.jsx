import React from 'react'



import Navigation from './Navbar/Navigation'
import Footer from './Footer/Footer'
import { tw } from 'twind'
import Head from 'next/head'
import { motion, useScroll } from 'framer-motion';
import styles from './Page.module.css'
import ContactForm from './Forms/ContactForm'
const Page = ({children}) => {
  const { scrollYProgress } = useScroll();
  
  
  console.log("SCROOLL => ",scrollYProgress);
  return (
    <>
      <motion.div
      initial={{ opacity: 0, scale: 0.5  }}
      animate={{ opacity: 1, scale: 1  }}
      
      exit={{ opacity: 0 }}
      transition={{ duration: .5, delay:.5 }}
    >

      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      <main>{children}</main>
      {(scrollYProgress !== 0 && scrollYProgress !== 100) ? (
        <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
        
        />
        ) : null}
      <Footer />
        </motion.div>
    </>
  );
}

export default Page