import useUserRole from '../../hooks/useUserRole';
import AdminRoutes from '../../routes/AdminRoutes';
import Navigation from './Navigation';
import Page from '../Page';



const AdminLayout = ({ children }) => {
  const { data, loading } = useUserRole('Admin');

  return (
    <AdminRoutes>
      <Navigation user={data} />
      <Page metaTitle="Panou de Administrare Tomotiv" index={false}>
          {children}
      </Page>
    </AdminRoutes>
        );
      };
      
      export default AdminLayout;
          
        

