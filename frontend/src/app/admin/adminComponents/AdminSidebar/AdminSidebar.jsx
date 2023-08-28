'use client'
import NavBarLink from "./NavBarLink";
import { BiX, BiHomeAlt, BiSolidUserRectangle } from 'react-icons/bi';
import { FaScroll, FaUser } from 'react-icons/fa';
import {GiScrollQuill} from 'react-icons/gi'
import { AiFillFolder, AiOutlineMail } from 'react-icons/ai';
const AdminSidebar = () => {
  return (
    <>
      <div className="sidebar  relative bottom-0 lg:left-0 p-2 h-full min-h-screen max-w-[300px] overflow-y-auto text-center bg-secondary">
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center">
            <h1 className="font-bold ml-3">Tomotiv</h1>
            <BiX className="cursor-pointer ml-28 " />
          </div>
          <hr className="my-2 bg-gray-600 h-[1px]"></hr>
        </div>
        {/* <BiHomeAlt /> */}
        <NavBarLink href="/" text="Acasa" icon={<BiHomeAlt />} />
        {/* <FaScroll /> */}
        <NavBarLink
          href="/admin/cursuri"
          text="Cursuri"
          icon={
            <>
              <FaScroll />
            </>
          }
        />
        <NavBarLink
          secondary
          href="/admin/cursuri/creaza-curs"
          text="Creaza Curs"
          icon={
            <>
              <GiScrollQuill />
            </>
          }
        />
        {/* <BiSolidUserRectangle />  De schimbat*/}
        <NavBarLink href="/admin/users" text="Useri" icon={<FaUser />} />
        {/* <AiFillFolder /> */}
        <NavBarLink
          href="/admin/uploads"
          text="Uploads"
          icon={
            <>
              <AiFillFolder />
            </>
          }
        />
        <NavBarLink
          href="/admin/email"
          text="Email Marketing"
          icon={
            <>
              <AiOutlineMail />
            </>
          }
        />

        <hr className="my-4 bg-gray-600 h-[1px]"></hr>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white">
          <i className="bi bi-box-arrow-in-right"></i>
          <span className="text-[15px] ml-4 text-gray-200 font-bold">
            Logout
          </span>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar


//http://localhost:3000/admin/cursuri/creaza-curs