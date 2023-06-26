import React from 'react';
import UserRoute from '@/app/userRoutes/userRoutes';

const Layout = ({ children }) => {
  return (
    
    <>
    <UserRoute>
      <>{children}</>
    </UserRoute>

    </>
  );
};

export default Layout;
