import React from 'react'
import Link from 'next/link';


const NavBarLink = ({ href = '#', icon = <></>, text = '', secondary= false}) => {
  return (
    <Link
      href={href}
      className={`p-2.5 ${
        secondary ? 'text-sm' : 'text-md'
      } mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white`}
    >
      {icon}
      <span className={`ml-4 text-gray-200 ${secondary ? '' : 'font-bold'}`}>
        {text}
      </span>
    </Link>
  );
};


export default NavBarLink