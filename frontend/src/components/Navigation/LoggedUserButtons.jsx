'use client';
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from 'react-daisyui'

import  { Logout } from '@/helpers/actions';

const LoggedUserButtons = ({dispatch, user}) => {



   const roleBasedRouting = (role = []) => {
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
          dispatch({ type: 'LOGOUT' });
          router.push('/');
          Logout();
     }
   };
   const [rolebasedHref, setRoleBasedHref] = useState('');
   
   const router = useRouter()
   useEffect(()=>{
    setRoleBasedHref(roleBasedRouting(user?.role));
   },[])



  return (
    <div className="justify-self-center flex gap-3 flex-1">
      <span className={'btn bg-transparent '}>
        Salutare, <Link href={rolebasedHref}>{user.nume}</Link>
      </span>
      <Link href={'/cursuri-utilizator'}  className={`btn btn-primary`}>
        Vezi Cursurile tale
      </Link>
      <a
        onClick={async (e) => {
          e.preventDefault();
          console.log('DELOGARE CLICKED');
          dispatch({ type: 'LOGOUT' });
          router.push('/');
          Logout();
        }}
        className={`btn btn-secondary`}
      >
        Delogare
      </a>
    </div>
  );
}

export default LoggedUserButtons