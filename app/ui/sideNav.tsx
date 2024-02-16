'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const SideNav = () => {
  const links = [
    { name: 'Home', href: '/dashboard' },
    {
      name: 'Courses',
      href: '/dashboard/courses',
    },
    { name: 'Class', href: '/dashboard/class' },
    { name: 'Projects', href: '/dashboard/projects' },
  ];

  const pathName = usePathname();
  return (
    <>
      <div className=" h-full w-full bg-white pt-[8rem]">
        {/* <form action="">
          <div className="relative mx-auto flex w-[80%] rounded-lg border">
            <input
              type="text"
              className="w-full border-0 outline-0 focus:outline-0  focus:outline-transparent"
              placeholder="Search"
            />
          </div>
        </form> */}
        <form action="" className="mt-10 ">
          <div className="relative mx-auto w-[80%] border border-gray-100">
            <CiSearch className="absolute left-2 top-3 mr-2" />
            <input type="text" className=" w-full pl-7" placeholder="search" />
          </div>
        </form>
        <nav className="mt-10 flex flex-col px-6">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={clsx(
                  'pointer flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-green-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
                  { 'bg-green-200 text-black': pathName === link.href },
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
};

export default SideNav;
