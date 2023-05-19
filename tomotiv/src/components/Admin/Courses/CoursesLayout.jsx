import React from 'react';
import { tw } from 'twind';

import CoursesNav from './CoursesNav';
import AdminLayout from '../AdminLayout';

const CoursesLayout = ({children}) => {
  return (
    <AdminLayout>
      <main className={tw('flex flex-row gap-2 w-fit')}>
        <CoursesNav />
        <div>{children}</div>
      </main>
    </AdminLayout>
  );
};

export default CoursesLayout;
