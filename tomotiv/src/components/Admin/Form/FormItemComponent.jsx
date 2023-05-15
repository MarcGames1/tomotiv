import React, {useState} from 'react';
import Select from 'react-select';
import {tw} from 'twind';
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  cardWrapperClass,
  cardTitleClass,
  deleteButtonClass,
  detailWrapperClass,
  detailItemClass,
} from './formStyles';
import ApiClient from '../../../Classes/ApiClient';


  const api = new ApiClient(process.env.NEXT_PUBLIC_API);



 const FormItemComponent = ({
   form = {
     _id: '',
     nume: '',
     phone: '',
     content: '',
     status: [],
   },
   selectedForms = [],
   setSelectedForms = function (form) {
     return;
   },
   updateFormList = () => {},
 }) => {
   const handleCheckboxChange = (formId) => {
     if (selectedForms.includes(formId)) {
       // Deselectare - ștergere din listă
       setSelectedForms(selectedForms.filter((id) => id !== formId));
     } else {
       // Selectare - adăugare în listă
       setSelectedForms([...selectedForms, formId]);
     }
   };

   const handleDelete = async (formId) => {
     try {
       const { msg } = await api
         .delete(`/admin/contact-forms/${formId}`)
          updateFormList(await api.get('/contact-forms')) 
        
     } catch (error) {
       console.log(error);
     }
   };

   const statusOptions = [
     { value: 'Nou', label: 'Nou' },
     {
       value: 'Asteapta raspuns de la noi',
       label: 'Asteapta raspuns de la noi',
     },
     { value: 'Asteptam raspuns de la el', label: 'Asteptam raspuns de la el' },
     { value: 'Rezolvat', label: 'Rezolvat' },
   ];

   return (
     <>
       <div className={cardWrapperClass}>
         <div className="flex items-center justify-between mb-4">
           <h3 className={cardTitleClass}>{form.nume}</h3>
           <div className="flex space-x-2">
             <input
               className={tw('default:ring-2')}
               type="checkbox"
               onChange={() => handleCheckboxChange(form._id)}
             />
             <button
               className={deleteButtonClass}
               onClick={() => handleDelete(form._id)}
             >
               <RiDeleteBin6Line size={20} />
             </button>
           </div>
         </div>
         <div className={detailWrapperClass}>
           <div className={detailItemClass}>
             <span className={tw`mr-2 font-semibold`}>Email:</span>
             <span>{form.email}</span>
           </div>
           <div className={detailItemClass}>
             <span className={tw`mr-2 font-semibold`}>Phone:</span>
             <span>{form.phone}</span>
           </div>
           <div className={detailItemClass}>
             <span className={tw`mr-2 font-semibold`}>Content:</span>
             <span>{form.content}</span>
           </div>
           <div className={detailItemClass}>
             <span className={tw`mr-2 font-semibold`}>Status:</span>
             <Select
               className={tw`rounded-lg p-1.5 w-full`}
               defaultValue={statusOptions.find(
                 (option) => option.value === form.status
               )}
               onChange={(value) => {}}
               options={statusOptions}
             />
           </div>
         </div>
       </div>
     </>
   );
 };

export default FormItemComponent;

