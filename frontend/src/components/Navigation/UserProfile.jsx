import { useRouter } from 'next/navigation';
import React, {useState} from 'react';

import { Logout } from '@/helpers/actions';
import Link from 'next/link';

const UserProfile = ({ user, dispatch }) => {

    const router = useRouter()

    const LogoutUser = () =>{
              dispatch({ type: 'LOGOUT' });
              router.push('/');
              Logout();
    }
  const roleBasedRouting = (role = []) => {
    if (role.includes('Admin')) {
      return '/admin';
    } else if (role.includes('Instructor')) {
      return '/instructor';
    } else if (role.includes('Subscriber')) {
      return '/subscriber';
    } else {
      console.log(role[role.length - 1]);
        LogoutUser()
    }
  };


  if (!user) {
    return;
  }

  return (
    // <Navbar.Start>
    //   <LoggedUserButtons dispatch={dispatch} user={user} />
    // </Navbar.Start>

    <div className="navbar bg-base-100">
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="avatar placeholder">
              <div className="bg-neutral-focus p-3 text-neutral-content rounded-full w-full">
                <span className="text-xl">{user.nume[0].toUpperCase()}</span>
              </div>
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href={'/cursuri-utilizator'} className="justify-between">
                Vezi Cursurile Tale
              </Link>
            </li>
            <li>
              <a onClick={LogoutUser}>Delogheaza-te</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};


export default   UserProfile