import type { Metadata } from 'next';
import { Roboto_Condensed } from 'next/font/google';
import './globals.scss';

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '700'],
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
        className={`${robotoCondensed.className} antialiased w-full p-4 md:w-[50vw] mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
