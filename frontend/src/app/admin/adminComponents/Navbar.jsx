import React from 'react'

import ActiveLink from './ActiveLinkComponent';

const AdminNavbar = () => {

  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <ActiveLink href={'/admin/forms'}>
                Formulare
              </ActiveLink>
            </li>
            <li>
              <ActiveLink href={'/admin/cursuri'}>Cursuri</ActiveLink>
            </li>
            <li>
              <ActiveLink href={'/admin/users'}>Utilizatori</ActiveLink>
            </li>
          </ul>
        </div>
        <ActiveLink href={'/'} class="btn btn-ghost normal-case text-xl">
          Tomotiv
        </ActiveLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1">
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
      <div class="navbar-end">
        <a class="btn">Button</a>
      </div>
    </div>
  );
}

export default AdminNavbar


