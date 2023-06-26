import React from 'react';
import UserRoute from '@/app/userRoutes/userRoutes';

const layout = ({ children }) => {
  return (
    <>
      <UserRoute>{children}</UserRoute>
    </>
  );
};

export default layout;
