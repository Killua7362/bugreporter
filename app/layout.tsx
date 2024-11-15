import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { notoSans, albertSans } from './fonts';
import './globals.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false;

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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${notoSans.variable} ${albertSans.variable} antialiased`}
      >
        {/* This is a hack to prevent FOUC in firefox */}
        <script>0</script>
        {children}
      </body>
    </html>
  );
}
