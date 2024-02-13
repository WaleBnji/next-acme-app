import MobileNav from '@/app/ui/mobileNav';
import SideNav from '@/app/ui/sideNav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:relative md:flex-row md:justify-between md:overflow-hidden">
      <MobileNav />
      <SideNav />
      <div className="flex-grow p-6 md:ml-[5rem] md:w-[80%] md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
