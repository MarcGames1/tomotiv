import React from 'react'
import Navigation from './Navbar/Navigation'
import Footer from './Footer/Footer'
import { tw } from 'twind'
import Head from 'next/head'
import { motion, useScroll } from 'framer-motion';
import styles from './Page.module.css'
const Page = ({children}) => {
  const { scrollYProgress } = useScroll();
  
  
  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      <main>{children}</main>
      <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
      <Footer />
    </>
  );
}

export default Page