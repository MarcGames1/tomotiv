import React, { useState } from 'react';
import { tw } from 'twind';
import Link  from 'next/link';
import styles from './Navigation.module.css';
import {GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineCloseSquare } from 'react-icons/ai'
import { Button } from '../ux';
import Hamburger from './Hamburger';
import { colors, typography, button } from '../../styles';
import Image from 'next/image'
import Dropdown from '../ux/Dropdown/Dropdown';
import Offcanvas from './Offcanvas';
import { servicii, menuItems } from '../../dateStatice';



 const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <header className={`${styles.header} ${styles.sticky}`}>
        <div
          className={`${styles.mobileMenu} ${tw(
            'w-full flex flex-row items-center justify-between'
          )}`}
        >
          <div
            className={tw('lg:hidden md:block sm:block')}
            onClick={toggleMenu}
          >
            <Hamburger active={showMenu} />
          </div>

          <div className={tw('hidden lg:block')}>
            {/* VIZIBIL PE DESKTOP ( DOAR Meniu + LOGO) */}
            <Image
              height={300}
              width={300}
              src={'/assets/Logo/Horizontal - Color.svg'}
            />
          </div>
          <div
            className={tw(
              'md:flex lg:flex w-max gap-5	 flex-row items-center justify-between hidden'
            )}
          >
            {menuItems.map((item) => (
              <>
                <Link href={item.href}>{item.label}</Link>
              </>
            ))}
            <Dropdown label="Servicii">
              {servicii.map((link, index) => (
                <Link key={index} href={link.href}>
                  {link.label}
                </Link>
              ))}
            </Dropdown>
          </div>
          <Button className={`${button.secondary} ${tw('border-blue-800 	')}`}>
            Inregistreaza-te
          </Button>
        </div>
      </header>
      {/* MOBILE MENU OFFCANVAS */}
      <Offcanvas show={showMenu} close={toggleMenu} />
    </>
  );
};


export default Navigation


const MobileItems = () =>{
  return (
    <div className={tw('flex flex-col  bg-inherit	lg:hidden')}>
      {' '}
      {menuItems.map((item) => (
        <>
          <Link href={item.href}>{item.label}</Link>
        </>
      ))}
    </div>
  );
}