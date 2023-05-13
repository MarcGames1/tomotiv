import { useState } from 'react';
import { tw } from 'twind';
import FormItem from './FormItem.jsx';


const statusOptions = [
  { value: 'Nou', label: 'Nou' },
  { value: 'Asteapta raspuns de la noi', label: 'Asteapta raspuns de la noi' },
  { value: 'Asteptam raspuns de la el', label: 'Asteptam raspuns de la el' },
  { value: 'Rezolvat', label: 'Rezolvat' },
];
const FormList = ({ forms }) => {
  const [selectedForm, setSelectedForm] = useState(null);

  const handleEdit = (form) => {
    setSelectedForm(form);
  };

  const handleDelete = (formId) => {
    // Delete form with the given ID from the backend API
    // Update state to reflect the deleted form
  };

  const handleStatusChange = (selectedOption) => {
    setSelectedForm((prevState) => ({
      ...prevState,
      status: selectedOption.value,
    }));
  };

  const cardWrapperClass = tw`flex flex-col p-4 border rounded-lg shadow-md`;
  const cardTitleClass = tw`font-bold text-lg`;
  const cardButtonClass = tw`text-base p-1.5 rounded-lg focus:outline-none hover:opacity-75 transition-opacity duration-200 ease-in-out`;
  const editButtonClass = tw`${cardButtonClass} text-blue-500 hover:text-blue-600`;
  const deleteButtonClass = tw`${cardButtonClass} text-red-500 hover:text-red-600`;
  const detailWrapperClass = tw`flex flex-col space-y-2`;
  const detailItemClass = tw`flex items-center`;

  return (
    <div className="flex flex-col w-full max-w-lg space-y-4">
      {forms.map((form) => (
        <>
        <FormItem
          key={form._id}
          form={form}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
          handleStatusChange={handleStatusChange}
          statusOptions={statusOptions}
          cardWrapperClass={cardWrapperClass}
          cardTitleClass={cardTitleClass}
          detailWrapperClass={detailWrapperClass}
          detailItemClass={detailItemClass}
          editButtonClass={editButtonClass}
          deleteButtonClass={deleteButtonClass}
          />
          </>
      ))}
    </div>
  );
};

export default FormList;
