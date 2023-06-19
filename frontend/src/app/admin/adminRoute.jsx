'use client';
import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import AdminNavbar from './adminComponents/Navbar';
import React from 'react'


const AdminRoute = ({ children }) => {
  const { ok, data, loading } = useUserRole('Admin');
  const router = useRouter();

  console.log('DATAAAA =>', data);

  if (loading) {
    return (
      <div>
        <span className="loading loading-dots loading-xs"></span>
      </div>
    );
  }
  if (!ok) {
    return <div>NU ai acces aici</div>;
  }

  if (ok) {
    console.log(ok, data, loading);
    return (
      <>
        <AdminNavbar />
        {children}
      </>
    );
  }
};

export default AdminRoute