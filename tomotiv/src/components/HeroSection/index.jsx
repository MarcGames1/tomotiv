import React, { useState } from 'react'
import styles from './index.module.css'
import HeroSectionBG from './background'
import { colors, typography } from '../../styles'
import { tw } from 'twind'
import { Button } from '../ux'
import { button } from '../../styles'
import { IoIosTabletLandscape, IoIosTabletPortrait } from 'react-icons/io';
import {GiTriangleTarget} from 'react-icons/gi'
import { motion } from 'framer-motion';
import VisibilitySensor from 'react-visibility-sensor';

const HeroSection = ({title, subtitle}) => {
  const [hover, setHover] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  
 


    const handleVisibilityChange = (isVisible) => {
      setIsVisible(!isVisible);
    };
 

  
 
  return (
    <>
      <HeroSectionBG>
        <VisibilitySensor onChange={handleVisibilityChange}>
          <motion.div
            key={'firstSection'}
            initial={{ y: 0, opacity: 1 }}
            animate={{
              y: isVisible ? 30 : 0,
              opacity: [0, 1],
              x: [100, 0],
            }}
            exit={{ y: -10, opacity: 0 }}
            className={styles.content}
          >
            <h1 className={`${tw('p-4')} ${typography.h1}`}>{title}</h1>
            <p className={`${tw('p-4')} ${typography.p}`}>{subtitle}</p>
            <div
              className={tw('flex flex-row gap-5 items-center justify-around	')}
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
                <GiTriangleTarget size={'2em'} color={colors.accent} />

                <span>Vezi video</span>
              </Button>
            </div>
          </motion.div>
        </VisibilitySensor>
      </HeroSectionBG>
    </>
  );
}

export default HeroSection