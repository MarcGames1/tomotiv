import React, {useContext} from 'react';
import { FaUsers, FaBookOpen, FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';
import { tw } from 'twind';
import { Context } from '../../context';


const Navigation = () => {
  
   const {
     state: { user },
   } = useContext(Context);

  return (
    <nav
      className={tw`bg-gray-800 px-6 py-4 flex justify-between items-center`}
    >
      <div>
        <Link href="/admin" className={tw`text-white font-bold text-xl`}>
          Admin Tomotiv
        </Link>
      </div>
      <div>
        <ul className={tw`flex items-center`}>
          <li className={tw`mr-6`}>
            <Link
              href="/admin/users"
              className={tw`text-gray-400 hover:text-white flex items-center`}
            >
              <FaUsers className={tw`mr-2`} />
              Users
            </Link>
          </li>
          <li className={tw`mr-6`}>
            <Link
              href="/admin/courses"
              className={tw`text-gray-400 hover:text-white flex items-center`}
            >
              <FaBookOpen className={tw`mr-2`} />
              Courses
            </Link>
          </li>
          <li className={tw`mr-6`}>
            <Link
              href="/admin/forms"
              className={tw`text-gray-400 hover:text-white flex items-center`}
            >
              <FaClipboardList className={tw`mr-2`} />
              Forms
            </Link>
          </li>
          <li>
            <span className={tw`text-gray-400`}>
              {user?.nume} - {user?.role[user?.role.length - 1]}
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
