import React, { useState } from 'react';
import { tw } from 'twind';
import FormItemComponent from './FormItemComponent';
import axios from 'axios'
import { deleteButtonClass } from './formStyles';
import useDeleteApi from '../../../hooks/useDeleteApi';
import ApiClient from '../../../Classes/ApiClient';
const FormList = ({ forms }) => {

  const [selectedForms, setSelectedForms] = useState([]);
  const [isSelected, setIsSelected] = useState(false)
  
  const api = new ApiClient(process.env.NEXT_PUBLIC_API);

 const handleSelect = (formId) => {
   if (selectedForms.includes(formId)) {
     setSelectedForms(selectedForms.filter((id) => id !== formId));
   } else {
     setSelectedForms([...selectedForms, formId]);
   }
 };

const deleteSelectedForms = async () => {
  try {
    const response = await api.delete('/contact-forms/delete-all', {
      data: { selectedForms },
    });
    console.log(response.data);
    setSelectedForms([]);
  } catch (error) {
    console.error(error);
  }
};


 

  
   return (
    <div className={tw('flex flex-col w-full max-w-lg space-y-4')}>
      <div className="flex items-center justify-between">
        <h2>Forms</h2>
        {selectedForms.length > 0 && (
          <button className={deleteButtonClass} onClick={e =>{deleteSelectedForms()}}>
            Delete Selected Forms
          </button>
        )}
      </div>
      {forms.map((form) => (
        <div key={form._id}>
          <FormItemComponent
            key={form._id}
            form={form}
            handleSelect={handleSelect}
          />
        </div>
      ))}
    </div>
  );
};

export default FormList;
