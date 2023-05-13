import React from 'react';
import Select from 'react-select';
import {tw} from 'twind';
import MdModeEdit from 'react-icons/md'
import { RiDeleteBin6Line } from 'react-icons/ri';

 const FormItem = ({
  form,
  handleEdit,
  handleDelete,
  handleStatusChange,
  statusOptions,
  cardWrapperClass,
  cardTitleClass,
  detailWrapperClass,
  detailItemClass,
  editButtonClass,
  deleteButtonClass,
}) => {
  return (
    <div key={form._id} className={cardWrapperClass}>
      <div className="flex items-center justify-between mb-4">
        <h3 className={cardTitleClass}>{form.nume}</h3>
        <div className="flex space-x-2">
          <button className={editButtonClass} onClick={() => handleEdit(form)}>
            <MdModeEdit size={20} />
          </button>
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
            onChange={(value) => handleStatusChange(form._id, value)}
            options={statusOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default FormItem

