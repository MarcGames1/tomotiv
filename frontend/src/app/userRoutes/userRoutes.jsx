'use client';
import useUserRole from '@/hooks/useUserRole';
import { useRouter } from 'next/navigation';
import React from 'react';

const UserRoute = ({ children }) => {
  const { ok, data, loading } = useUserRole('Subscriber');
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
        
        {children}
      </>
    );
  }
};

export default UserRoute;
