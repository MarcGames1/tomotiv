import React, { useState } from 'react';
import { tw } from 'twind';
import FormItemComponent from './FormItemComponent';
import { deleteButtonClass } from './formStyles';
import ApiClient from '../../../Classes/ApiClient';
import useApi from '../../../hooks/useApi';

const FormList = ({ forms, setisUiUpdated = () => {} }) => {
  const [selectedForms, setSelectedForms] = useState([]);

  const api = new ApiClient(process.env.NEXT_PUBLIC_API);

  const deleteSelectedForms = async () => {
    try {
      const response = await api.delete('/contact-forms/delete-all', {
        data: { selectedForms },
      });
      console.log(response.data);
      setSelectedForms([]);
      setisUiUpdated(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={tw('flex flex-col w-full max-w-lg space-y-4')}>
      <div className="flex items-center justify-between">
        <h2>Forms</h2>
        {selectedForms.length > 0 && (
          <button
            className={deleteButtonClass}
            onClick={(e) => {
              deleteSelectedForms();
            }}
          >
            Delete Selected Forms
          </button>
        )}
      </div>

      {forms.map((form) => (
        <div key={form._id}>
          <FormItemComponent
            key={form._id}
            form={form}
            selectedForms={selectedForms}
            setSelectedForms={setSelectedForms}
          />
        </div>
      ))}
    </div>
  );
};

export default FormList;
