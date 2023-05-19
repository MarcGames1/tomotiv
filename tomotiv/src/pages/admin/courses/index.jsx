import React,{ useState , useEffect} from 'react'
import useApi from '../../../hooks/useApi';
import useUserRole from '../../../hooks/useUserRole';
import Navigation from '../../../components/Admin/Navigation';
import AdminRoutes from '../../../routes/AdminRoutes';
import Layout from '../../../components/Admin/Courses/Layout';

const Courses = () => {
    const { userData } = useUserRole('Admin');

  return (
    <AdminRoutes>
      <Navigation user={userData} />
      <Layout>
      <div>Courses</div>

      </Layout>
    </AdminRoutes>
  );
}

export default Courses