import { Toaster } from '@/components/ui';
import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.scss';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Movie Seat Booking',
  description: 'A website to book movie seats',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${robotoCondensed.className} antialiased w-full p-4 min-h-screen`}
      >
        <div className='flex flex-col justify-center items-center gap-6 mx-auto w-full md:w-[80vw] lg:w-[50vw]'>
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}
