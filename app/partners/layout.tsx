'use client';

import MobileNav from '@/app/ui/mobileNav';
import SideNav from '@/app/ui/sideNav';
import { useApp } from '../context/courseContext';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const { userData } = useApp();
  const router = useRouter();

  //   useEffect(() => {
  //     if (!userData?.token) {
  //       router.push('/sign-in');
  //     }
  //   }, [userData?.token]);

  return (
    <div className="flex h-screen flex-col md:relative md:flex-row md:justify-between md:overflow-hidden">
      <MobileNav />
      <div className="flex w-full items-start">
        <div className=" hidden h-screen w-[30%] max-w-[350px] border-red-500 md:block">
          <SideNav />
        </div>
        <div className="h-screen p-6 md:w-full md:overflow-y-scroll md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
