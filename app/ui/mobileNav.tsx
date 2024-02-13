'use client';

// import { FaBeer } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export default function MobileNav() {
  const [mobileMenu, setMobileMenu] = useState(false);
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
    <div className="relative p-[2rem] md:hidden">
      <button
        className="absolute left-6"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {!mobileMenu ? <GiHamburgerMenu size={30} /> : null}
      </button>
      {mobileMenu ? (
        <div className="fixed left-0 top-0 z-[30] h-screen w-[70%] bg-white px-6 py-6 text-black">
          <div className="relative h-full w-full">
            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="absolute right-0 mb-10 "
            >
              <IoClose size={30} />
            </button>

            <nav className="mt-10 flex flex-col">
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
        </div>
      ) : null}
    </div>
  );
}
