import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notoSans, albertSans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bug Reporter',
  description: 'Created for getting bug reports from all apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>): JSX.Element {
  return (
    <html lang="en" className="dark">
      <body
        className={`${notoSans.variable} ${albertSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
