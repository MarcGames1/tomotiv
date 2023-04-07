import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import HeroSectionBG from './background'
import { typography } from '../../styles'
import { tw } from 'twind'
import { Button } from '../ux'
import { button } from '../../styles'
import { IoIosTabletLandscape, IoIosTabletPortrait } from 'react-icons/io';
import {GiTriangleTarget} from 'react-icons/gi'
import { motion, AnimatePresence, useScroll, animate } from 'framer-motion';

const HeroSection = ({title, subtitle, isVisible = true }) => {
  const [hover, setHover] = useState(false);
  const { scrollYProgress } = useScroll();
  const [translate, setTranslate] = useState(0)


  const handleTranslate = (x) => {
    if(translate !== x){
      setTranslate(x);
    }

    console.log('scroolled')

  };
  useEffect(()=>{
    console.log(scrollYProgress)
  }, translate)
  return (
    <>
      <HeroSectionBG>
        <AnimatePresence>
          {isVisible && (
            <motion.div
              key={'firstSection'}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: translate, opacity: 1 }}
              whileInView={handleTranslate( )}
              exit={{ y: -10, opacity: 0 }}
              className={styles.content}
              
            >
              <h1 className={`${tw('p-4')} ${typography.h1}`}>{title}</h1>
              <p className={`${tw('p-4')} ${typography.p}`}>{subtitle}</p>
              <div
                className={tw(
                  'flex flex-row gap-5 items-center justify-around	'
                )}
              >
                <Button
                  onMouseOver={(e) => {
                    e.preventDefault();
                    setHover(true);
                  }}
                  onMouseLeave={(e) => {
                    e.preventDefault();
                    setHover(false);
                  }}
                  className={button.primary}
                >
                  {hover ? (
                    <IoIosTabletLandscape size={'2em'} color="black" />
                  ) : (
                    <IoIosTabletPortrait size={'2em'} color="black" />
                  )}{' '}
                  <span>Afla mai mult</span>
                </Button>
                <Button className={button.secondary}>
                  <GiTriangleTarget size={'2em'} color="#FF88AA" />

                  <span>Vezi video</span>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </HeroSectionBG>
    </>
  );
}

export default HeroSection