import { Inter } from 'next/font/google';
import AdminNavbar from './adminComponents/Navbar';
import '../../app/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Admin Panel',
  description: 'Panoul de administrare Tomotiv',
  robots:'noindex, follow'
};

export default function Layout({ children }) {
  return (
     
      
      <>
      <AdminNavbar />
      {children}
      </>
      
  
  );
}
