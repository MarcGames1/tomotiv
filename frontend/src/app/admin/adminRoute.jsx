'use client';

import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import Page from '../PageLayout';
import React from 'react'
// import {AdminSidebar} from './adminComponents/AdminSidebar/';
import { AdminSidebar } from './adminComponents/AdminSidebar/AdminSidebar';

const AdminRoute = ({ children }) => {
  const { ok, data, loading } = useUserRole('Admin');
  const router = useRouter();

  

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
        <Page>
          <div className="flex">
            <div className="w-1/5">
              <AdminSidebar />
            </div>
            <main className="w-4/5">{children}</main>
          </div>
        </Page>
      </>
    );

  }
};

export default AdminRoute