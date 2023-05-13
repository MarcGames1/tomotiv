import useUserRole from "../hooks/useUserRole";

const AdminRoutes = ({Component, pageProps}) =>{
     const { ok, data, loading } = useUserRole('Admin');

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ok) {
    return <div>You are not authorized</div>;
  }

  return <Component {...pageProps} />;
};

export default AdminRoutes
