import React, { useState, useContext } from 'react';
import { tw } from 'twind';
import Link  from 'next/link';

import styles from './Navigation.module.css';
import { Button } from '../ux';
import Hamburger from './Hamburger';
import { button, links, typography } from '../../styles';
import Image from 'next/image'
import Dropdown from '../ux/Dropdown/Dropdown';
import Offcanvas from './Offcanvas';
import { servicii, menuItems } from '../../dateStatice';
import { useRouter } from 'next/router';
import { Context } from '../../context';
import axios from 'axios';
import { Logout } from '../../helpers/actions';


   const roleBasedRouting = (role =[]) => {
     switch (role[role.length - 1]) {
       case 'Admin':
         return '/admin';
         break;
       case 'Instructor':
         return '/instructor';
         break;
       case 'Subscriber':
         return '/subscriber';
         break;

       default:
        console.log(role[role.length - 1]);
         throw new Error(`Invalid role: ${role}`);
     }
   };

 const Navigation = () => {


  const { state, dispatch } = useContext(Context);
  const { user } = state;
   
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
            <Link href={'/'}>
              <Image
                height={300}
                width={300}
                src={'/assets/Logo/Horizontal - Color.svg'}
              />
            </Link>
          </div>
          <div
            className={tw(
              'md:flex lg:flex w-max gap-5	 flex-row items-center justify-between hidden'
            )}
          >
            {menuItems.map((item) => (
              <>
                <Link className={links} href={item.href}>
                  {item.label}
                </Link>
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
          {user ? (
            <LoggedUserButtons dispatch={dispatch} user={user} />
          ) : (
            <UnloggedUserButtons />
          )}
        </div>
      </header>
      {/* MOBILE MENU OFFCANVAS */}
      <Offcanvas show={showMenu} close={toggleMenu} />
    </>
  );
};


export default Navigation


const UnloggedUserButtons = () =>{
  return (
    <>
      <Link href={'/sign-up'}>
        <Button className={`${button.primary} ${tw('border-blue-800 	')}`}>
          Inregistreaza-te
        </Button>
      </Link>
      <Link href={'/sign-in'}>
        <Button className={`${button.secondary} ${tw('border-blue-800 	')}`}>
          Logheaza-te
        </Button>
      </Link>
    </>
  );
}


const LoggedUserButtons = ({user, dispatch}) =>{

  
const router = useRouter();

  return (
    <>
      <span className={typography.p2}>
        Salutare, <Link href={roleBasedRouting(user?.role)}>{user.nume}</Link>
      </span>
      <Button className={`${button.primary} ${tw('border-blue-800 	')}`}>
        Vezi Cursurile tale
      </Button>
      <a
        onClick={async (e) => {
          e.preventDefault();
          console.log('DELOGARE CLICKED');
          dispatch({ type: 'LOGOUT' });
          router.push('/');
          Logout();
        }}
        className={`${button.secondary} ${tw('border-blue-800 	')}`}
      >
        Delogare
      </a>
    </>
  );
}