'use client'
import React from 'react'

import NavBarLink from './NavBarLink';
import { BiX, BiHomeAlt, BiSolidUserRectangle } from 'react-icons/bi';
import {FaScroll} from 'react-icons/fa'
import {AiFillFolder} from 'react-icons/ai'

export const AdminSidebar = () => {
  const openSidebar = () =>{}


  return (
    <div className="sidebar  relative bottom-0 lg:left-0 p-2 h-screen max-w-[300px] overflow-y-auto text-center bg-secondary">
      <div className="text-gray-100 text-xl">
        <div className="p-2.5 mt-1 flex items-center">
          <h1 className="font-bold ml-3">Tomotiv</h1>
          <BiX className="cursor-pointer ml-28 " onClick={openSidebar} />
        </div>
        <hr className="my-2 bg-gray-600 h-[1px]"></hr>
      </div>

      <NavBarLink href="/" text="Acasa" icon={<BiHomeAlt />} />
      <NavBarLink href="/admin/cursuri" text="Cursuri" icon={<FaScroll />} />
      <NavBarLink
        href="/admin/users"
        text="Useri"
        icon={<BiSolidUserRectangle />}
      />
      <NavBarLink href="/admin/uploads" text="Uploads" icon={<AiFillFolder />} />

      <hr className="my-4 bg-gray-600 h-[1px]"></hr>

      <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
        <i className="bi bi-box-arrow-in-right"></i>
        <span className="text-[15px] ml-4 text-gray-200 font-bold">Logout</span>
      </div>
    </div>
  );
}






