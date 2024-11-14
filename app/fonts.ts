import { Noto_Sans, Albert_Sans } from 'next/font/google';

export const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
});

export const albertSans = Albert_Sans({
  subsets: ['latin'],
  variable: '--font-albert-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal'],
});
