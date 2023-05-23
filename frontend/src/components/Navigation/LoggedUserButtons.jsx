'use client';
import React, {useState, useEffect} from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from 'react-daisyui'

import { Logout } from '@/helpers/actions';

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
    <div className="self-center">
      <span className={''}>
        Salutare, <Link href={rolebasedHref}>{user.nume}</Link>
      </span>
      <Button color='primary' className={``}>
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
        className={`btn btn-secondary`}
      >
        Delogare
      </a>
    </div>
  );
}

export default LoggedUserButtons