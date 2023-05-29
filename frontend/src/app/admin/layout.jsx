import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

import Page from '@/app/PageLayout';
import ContextComponent from './ContextComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Panel',
  description: 'Panoul de administrare Tomotiv',
  robots:'noindex, follow'
};

export default function RootLayout({ children }) {
  return (
     
      <body data-theme="tomotiv" className="bg-neutral">
      <RootComponent>{children}</RootComponent>
      </body>
  
  );
}
