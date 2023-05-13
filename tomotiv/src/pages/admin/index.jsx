import React from 'react';
import Navigation from '../../components/Admin/Navigation';
import useUserRole from '../../hooks/useUserRole';

const Admin = () => {
  const { data } = useUserRole('Admin');

  return (
    <>
      <Navigation user={data} />
      <div className="container mx-auto my-4 text-white">
        <h1 className="text-2xl font-bold mb-4 ">Welcome, Admin!</h1>
        <p className="text-lg">
          Here you can manage users, courses, and forms.
        </p>
      </div>
    </>
  );
};

export default Admin;
