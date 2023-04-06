import React, { useState } from 'react'
import Image from 'next/image'
import styles from './index.module.css'
import HeroSectionBG from './background'
import { typography } from '../../styles'
import { tw } from 'twind'
import { Button } from '../ux'
import { button } from '../../styles'
import { IoIosTabletLandscape, IoIosTabletPortrait } from 'react-icons/io';
import {GiTriangleTarget} from 'react-icons/gi'

const HeroSection = ({title, subtitle}) => {
  const [hover, setHover] = useState(false);
  return (
    <>
      <HeroSectionBG>
        <div className={styles.content}>
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
              <GiTriangleTarget size={'2em'} color="#FF88AA" />

              <span>Vezi video</span>
            </Button>
            
          </div>
        </div>
      </HeroSectionBG>
    </>
  );
}

export default HeroSection