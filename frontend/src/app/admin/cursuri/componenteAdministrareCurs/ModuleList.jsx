import React from 'react';
import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai';
import { Link } from 'next/link';

const ModuleList = ({ modules, handleRemoveModule, slug }) => {
  return (
    <>
      {modules.map((module, index) => (
        <div key={index} className="flex items-center mb-4">
          <div className="mr-2">
            <AiOutlineBook size={20} />
          </div>
          <div className="flex-grow">{module.title}</div>
          <div className="ml-2">
            <button
              className="btn btn-accent"
              onClick={() => handleRemoveModule(module)}
            >
              <AiOutlineDelete size={20} /> Sterge Modulul
            </button>
          </div>
          <div className="ml-2">
            <Link
              className="btn btn-info"
              href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii/${module._id}`}
            >
              Editeaza Modulul
            </Link>
          </div>
        </div>
      ))}
    </>
  );
};

export default ModuleList;
