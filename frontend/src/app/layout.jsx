import './globals.css';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

import Page from '@/app/PageLayout';
import ContextComponent from './ContextComponent';
import RootComponent from './rootComponent';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tomotiv ',
  description: 'Desriere Meta',
  robots: 'index, folow',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro-RO">
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <Script
          id="gtm-script"
          defer
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-T5L6Q4S');`,
          }}
        ></Script>
      </head>
      <body data-theme="tomotiv" className="bg-neutral">
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-T5L6Q4S"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
        ></noscript>

       <RootComponent>{children}</RootComponent>
      </body>
    </html>
  );
}
