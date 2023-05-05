import React, { useState } from 'react';
import { tw } from 'twind';
import Link  from 'next/link';
import styles from './Navigation.module.css';
import { Button } from '../ux';
import Hamburger from './Hamburger';
import { button, links } from '../../styles';
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
          className={`${styles.nav} ${tw(
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
                <Link className={links} href={item.href}>{item.label}</Link>
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


