import { Inter } from 'next/font/google';


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
