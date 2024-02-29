'use client';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { CiSearch } from 'react-icons/ci';
import Image from 'next/image';

const PartnerSideNav = () => {
  const links = [
    { name: 'Home', href: '/partners' },
    {
      name: 'Courses',
      href: '/partners/courses',
    },
    { name: 'Students', href: '/partners/students' },
    { name: 'Wallet', href: '/partners/wallet' },
  ];

  const pathName = usePathname();
  return (
    <>
      <div className=" h-full w-full bg-[#27779B] pt-[8rem]">
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
          <div className=" relative mx-auto w-[80%] rounded-lg  ">
            {/* <CiSearch className="absolute left-2 top-3 mr-2 text-white" /> */}
            <Image
              height={20}
              width={20}
              alt="search icon"
              src="/search-lg.svg"
              className="absolute left-2 top-3 mr-3 "
            />
            <input
              type="text"
              className=" w-full bg-[#344054] pl-10 text-white  placeholder:text-white"
              placeholder="search"
            />
          </div>
        </form>
        <nav className="mt-10 flex flex-col px-6">
          {links.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.name}
                className={clsx(
                  'pointer flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-[#344054] hover:text-white md:flex-none md:justify-start md:p-2 md:px-3',
                  { 'bg-[#344054] text-white': pathName === link.href },
                )}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
        <div className="absolute bottom-[8rem] mb-12 px-6">
          <ul className="text-[#F2F4F7]">
            <nav className="space-y-3">
              <li className="flex justify-start text-[#F2F4F7]">
                <span className="">
                  <Image
                    width={20}
                    height={20}
                    alt="settings"
                    src="/life-buoy-01.svg"
                    className="mr-2"
                  />
                </span>
                Support
              </li>
              <li className="flex justify-start text-[#F2F4F7]">
                <span className="">
                  <Image
                    width={20}
                    height={20}
                    alt="settings"
                    src="/settings-01.svg"
                    className="mr-2"
                  />
                </span>
                Settings
              </li>
            </nav>
          </ul>
        </div>
        <div className="absolute bottom-[4rem] px-6">
          <div className="mx-auto h-[1px] w-[240px] bg-gray-600" />
          <div className="flex justify-between pt-4">
            <Image
              height={40}
              width={40}
              alt="profile Image"
              src="/Avatar.svg"
            />
            <div className="text-white">
              <h4>Ayele Tutor Center</h4>
              <p>ayele@tutor.com</p>
            </div>
            <Image width={30} height={30} alt="log out" src="/log-out-01.svg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerSideNav;
