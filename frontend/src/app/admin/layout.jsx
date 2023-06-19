
import React from 'react';
import '../../app/globals.css'
import AdminRoute from './adminRoute';



export const metadata = {
  title: 'Admin Panel',
  description: 'Panoul de administrare Tomotiv',
  robots:'noindex, follow'
};

 

export default function Layout({ children }) {

return <AdminRoute>
  {children}
</AdminRoute>

  }

