'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ActiveLink = ({ href, children }) => {

    const router = useRouter();
    const [active,setActive] =useState('')
   
useEffect(() => {
  console.log('ROUTER ASPATH=>', router.asPath, 'href-> ', href);
  router.asPath == href ? setActive('active') : setActive('');
}, [router.asPath]);
  
  return (
    <Link className={active} href={href}>
      {children}
    </Link>
  );
};

export default ActiveLink