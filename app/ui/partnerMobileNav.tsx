'use client';

// import { FaBeer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function PartnerMobileNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const links = [
    { name: 'Home', href: '/partners', icon: '/home-line.svg' },
    {
      name: 'Courses',
      href: '/partners/courses',
      icon: '/bar-chart-square-02.svg',
    },
    { name: 'Students', href: '/partners/students', icon: '/users-01.svg' },
    { name: 'Wallet', href: '/partners/wallet', icon: '/layers-three-01.svg' },
  ];
  const pathName = usePathname();
  return (
    <div className="relative p-[2rem] md:hidden">
      <button
        className="absolute left-6"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {!mobileMenu ? <GiHamburgerMenu size={30} /> : null}
      </button>
      {mobileMenu ? (
        <div className="fixed left-0 top-0 z-[30] h-screen w-[70%] bg-[#27779B] px-6 py-6 text-black">
          <div className="relative h-full w-full">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="absolute right-2 top-[-3rem] mb-10 "
            >
              <IoClose size={30} />
            </button>

            <nav className="mt-24 flex flex-col">
              {links.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.name}
                    className={clsx(
                      'pointer flex h-[48px] grow items-center justify-start gap-2 rounded-md p-3 text-sm font-medium text-[#F2F4F7] hover:bg-green-200 hover:text-black md:flex-none md:justify-start md:p-2 md:px-3',
                      { 'bg-[#344054] text-white': pathName === link.href },
                    )}
                  >
                    <span>
                      <Image
                        width={20}
                        height={20}
                        alt={link.name}
                        src={link.icon}
                      />
                    </span>
                    {link.name}
                  </Link>
                );
              })}
            </nav>
            <div className="absolute bottom-[12rem] mb-12">
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
            <div className="absolute bottom-[9rem]">
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
                <Image
                  width={30}
                  height={30}
                  alt="log out"
                  src="/log-out-01.svg"
                />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
