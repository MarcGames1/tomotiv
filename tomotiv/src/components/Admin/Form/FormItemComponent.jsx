import React, {useState} from 'react';
import Select from 'react-select';
import {tw} from 'twind';
import {MdModeEdit} from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri';
import {
  cardWrapperClass,
  cardTitleClass,
  cardButtonClass,
  deleteButtonClass,
  detailWrapperClass,
  detailItemClass,
} from './formStyles';

 const FormItemComponent = ({
   form = {
     _id: '',
     nume: '',
     phone: '',
     content: '',
     status: [],
   },
   
   handleSelect = () =>{}
 }) => {

const [isSelected, setIsSelected] = useState(false)
  

const selectForm = (formId) =>{
  setIsSelected(!isSelected)
  handleSelect(formId);
}

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
               checked={isSelected}
               onChange={() => selectForm(form._id)}
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
               onChange={(value) => {
                 handleStatusChange(value);
                 setSelectedForm(form._id); //
                 console.log(value, form._id);
               }}
               options={statusOptions}
             />
           </div>
         </div>
       </div>
     </>
   );
 };

export default FormItemComponent;

