import React, { useState , useEffect} from 'react';
import useApi from '../../hooks/useApi';
import useUserRole from '../../hooks/useUserRole';
import Navigation from '../../components/Admin/Navigation';
import FormList from '../../components/Admin/Form/FormList'
import AdminRoutes from '../../routes/AdminRoutes';


const Forms = () => {
  
  const { userData } = useUserRole('Admin');
  const { data: forms, loading, success ,refetch} = useApi('/api/contact-forms');
  const [formList, setFormList] = useState(forms || [])
  const [isUiUpdated , setisUiUpdated] = useState(true)
useEffect(() => {
  refetch()
  setFormList(forms);
  setisUiUpdated(true)
}, [isUiUpdated]);


  if (loading) {
    return <div>Loading...</div>;
  }

  if (success && forms.length === 0) {
    return <div>No forms found.</div>;
  }

  return (
    <AdminRoutes>
      <Navigation user={userData} />
      <div className="container mx-auto my-4">
        <h1 className="text-2xl font-bold mb-4 ">Manage Forms</h1>

        {forms && (
          <>
            <FormList forms={forms} setisUiUpdated={setisUiUpdated} />
          </>
        )}
      </div>
    </AdminRoutes>
  );}

export default Forms