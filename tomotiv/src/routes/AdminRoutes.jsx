import useUserRole from "../hooks/useUserRole";
import React from "react";
import { useRouter } from "next/router";
import { Logout } from "../helpers/actions";

function AdminRoutes({ children}) {
  const { ok, data, loading } = useUserRole('Admin');

  const router = useRouter();
 




  if (loading) {
    return <div>Loading...</div>;
  }

  if (!ok) {
    // Logout()
    // router.push('/')
    return (
      <div>
        Nu ai rol de Administrare!{' '}
      </div>
    );
  }

  return <>
  {children}
  </>
};

export default AdminRoutes;
