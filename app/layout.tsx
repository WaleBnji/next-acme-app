'use client';
import '@/app/ui/global.css';
import { Toaster } from 'react-hot-toast';
import { CourseProvider } from './context/courseContext';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Toaster position="top-center" />
      <CourseProvider>
        <body>{children}</body>
      </CourseProvider>
    </html>
  );
}
