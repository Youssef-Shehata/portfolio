import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Head from 'next/head';
import Image from 'next/image';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Youssef-Shehata',
  description: 'Software Engineer Portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
     <Head>
            <title>Youssef Shehata</title>
            <Image rel="icon" src="/favicon.ico" alt=''/>
        </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
