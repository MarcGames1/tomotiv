import { useRouter } from 'next/router';
import { tw } from 'twind';
import {Sidebar} from 'flowbite-react'
import Link from 'next/link';
import {
  HiChartPie,
  HiViewBoards,
  HiInbox,
  HiUser,
  HiShoppingBag,
  HiArrowSmRight,
  HiTable,
  HiArrowSmLeft,
} from 'react-icons/hi';
import Image from 'next/image';
import { useState } from 'react';


const CoursesNav = () => {
  const router = useRouter();
const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <>
      <div>
        <Sidebar
          className={tw('bg-blue-300')}
          aria-label="Sidebar"
          collapsed={isCollapsed}
        >
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item
                active={router.pathname === '/admin/cursuri/creaza-curs'}
                icon={HiChartPie}
              >
                <Link className="w-full" href="/admin/cursuri/creaza-curs">
                  Creaza Curs
                </Link>
              </Sidebar.Item>

              <Sidebar.Item
                active={router.pathname === '/admin/cursuri'}
                icon={HiViewBoards}
              >
                <Link className="w-full" href="/admin/cursuri">
                  Vezi Cursurile
                </Link>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                Inbox
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiUser}>
                Users
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                Products
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                Sign In
              </Sidebar.Item>
              {isCollapsed ? (
                <Sidebar.Item
                  onClick={(e) => {
                    setIsCollapsed(!isCollapsed);
                  }}
                  className="cursor-pointer"
                  icon={HiArrowSmRight}
                >
                  unCollapse
                </Sidebar.Item>
              ) : (
                <Sidebar.Item
                  onClick={(e) => {
                    setIsCollapsed(!isCollapsed);
                  }}
                  className="cursor-pointer"
                  icon={HiArrowSmLeft}
                  
                >
                  Collapse
                </Sidebar.Item>
              )}
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </>
  );
};

export default CoursesNav