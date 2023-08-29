import React from 'react';
import UserRoute from '@/app/userRoutes/userRoutes';

const layout = ({ children }) => {
  return (
    <main className='bg-base-100'>
      {children}
    </main>
  );
};

export default layout;
