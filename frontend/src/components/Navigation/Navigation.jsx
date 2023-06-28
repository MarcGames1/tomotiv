'use client';

import React, { useContext } from 'react';
import { Navbar, Dropdown, Button, Menu } from 'react-daisyui';
import Link from 'next/link';
import Image from 'next/image';
import LoggedUserButtons from './LoggedUserButtons';

import { servicii } from '@/dateStatice';

import { Context } from '../../context';

const Navigation = () => {
  //  const matches = useMediaQuery('(min-width: 768px)');

const { state, dispatch } = useContext(Context);
const { user } = state;
  
  const args = {normal: true, compact: 'md', vertical: false, horizontal: true};
  return (
    <div className="  flex   bg-base-100 p-4 items-center justify-center gap-2 font-sans">
      <Navbar className="">
        <Navbar.Start>
          {/* DROPDOWN SE AFISEAZA DOAR PE MOBIL  */}
          <Dropdown>
            <Button color="ghost" tabIndex={0} className="lg:hidden">
              {/* ASTA E UN BUTONUL DE TOGGLE DROPDOWN */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </Button>
            <Dropdown.Menu tabIndex={0} className="w-52 menu-compact mt-3">
              <NavigationLink href={'/'}>Acasa</NavigationLink>
              <NavigationLink href={'/despre'}>Despre Noi</NavigationLink>
              <NavigationLink href={'/cursuri/curs-seo'}>
                Curs Seo
              </NavigationLink>
              <li tabIndex={0}>
                <a className="justify-between">
                  Servicii
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                  >
                    <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                  </svg>
                </a>
                <ul className="p-2 bg-base-100">
                  {servicii.map((serviciu) => (
                    <li key={serviciu.href}>
                      <Link href={serviciu.href}>{serviciu.label}</Link>
                    </li>
                  ))}
                </ul>
              </li>
              {/* <Dropdown.Item>Item 3</Dropdown.Item> */}
            </Dropdown.Menu>
          </Dropdown>
          <Link href={'/'} className="btn btn-ghost normal-case text-xl">
           <Image alt='Tomotiv Logo' width={103} height={32} src='/svg/logo.svg' />
          </Link>
        </Navbar.Start>
        <Navbar.Center>
          <div className="hidden lg:flex">
            <Menu horizontal className="p-0">
              <NavigationLink href={'/'}>Acasa</NavigationLink>
              <NavigationLink href={'/despre'}>Despre Noi</NavigationLink>
              <NavigationLink href={'/cursuri/curs-seo'}>
                Curs Seo
              </NavigationLink>
              <Menu.Item tabIndex={0}>
                <a className="justify-between">
                  Serviciii
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                  >
                    <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
                  </svg>
                </a>
                <Menu className="z-50 p-2 bg-base-100">
                  {servicii.map((serviciu, idx) => (
                    <NavigationLink key={idx} href={serviciu.href}>
                      {serviciu.label}
                    </NavigationLink>
                  ))}
                </Menu>
              </Menu.Item>
            </Menu>
          </div>
        </Navbar.Center>
        <Navbar.End>

          <div className="gap-3 ">
            <>
              {user ? (
                <LoggedUserButtons dispatch={dispatch} user={user} />
                ) : (
                  <Link href="/login">
                  <Button className="btn-primary text-neutral">
                    Contul Tau
                  </Button>
                </Link>
              )}
            </>

           
          </div>
              </Navbar.End>
      </Navbar>
    </div>
  );
};

export default Navigation;

const NavigationLink = ({href, tabindex = undefined, children=undefined}) => {
  return (
    <Menu.Item tabIndex={tabindex}>
      <Link href={href}>{children}</Link>
    </Menu.Item>
  );
};
