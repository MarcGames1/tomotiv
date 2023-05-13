import React, { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useApi from '../../hooks/useApi';
import axios from 'axios';
import useUserRole from '../../hooks/useUserRole';
import Navigation from '../../components/Admin/Navigation';
import FormList from '../../components/Admin/form/FormList';

const Forms = () => {
  const [selectedForms, setSelectedForms] = useState([]);
  const { userData } = useUserRole('Admin');
  const { data: forms, loading, success, refetch } = useApi('/api/contact-forms');
  const { loading: deleteLoading, success: deleteSuccess, callApi } = useApi(
    {
      method: 'DELETE',
      url: '/api/contact-forms',
    },
    {
      manual: true,
      onSuccess: () => {
        setSelectedForms([]);
        refetch();
      },
    }
  );

  const handleCheckboxChange = (e, id) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      setSelectedForms([...selectedForms, id]);
    } else {
      setSelectedForms(selectedForms.filter((formId) => formId !== id));
    }
  };

  const handleDeleteForms = async () => {
    await callApi({
      data: {
        ids: selectedForms,
      },
    });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (success && forms.length === 0) {
    return <div>No forms found.</div>;
  }

  return (
    <>
      <Navigation user={userData} />
      <div className="container mx-auto my-4">
        <h1 className="text-2xl font-bold mb-4 ">Manage Forms</h1>
        {deleteSuccess && (
          <div className="bg-green-500 text-white py-2 px-4 rounded mb-4">
            Forms deleted successfully.
          </div>
        )}
        {forms && (
          <>
           <FormList forms={forms} />
          </>
        )}
      </div>
    </>
  );}

export default Forms