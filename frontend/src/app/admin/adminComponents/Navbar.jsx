import React from 'react'

import ActiveLink from './ActiveLinkComponent';

const AdminNavbar = () => {

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden">
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
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink href={'/admin/forms'}>Formulare</ActiveLink>
            </li>
            <li>
              <ActiveLink href={'/admin/cursuri'}>Cursuri</ActiveLink>
            </li>
            <li>
              <ActiveLink href={'/admin/users'}>Utilizatori</ActiveLink>
            </li>
          </ul>
        </div>
        <ActiveLink href={'/'} classname="btn btn-ghost normal-case text-xl">
          Tomotiv
        </ActiveLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <ActiveLink href={'/admin/forms'}>Formulare</ActiveLink>
          </li>
          <li>
            <ActiveLink href={'/admin/cursuri'}>Cursuri</ActiveLink>
          </li>
          <li>
            <ActiveLink href={'/admin/users'}>Utilizatori</ActiveLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
}

export default AdminNavbar


