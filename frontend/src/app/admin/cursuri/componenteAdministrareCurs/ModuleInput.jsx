import React, { useState } from 'react';

const ModuleInput = ({ handleAddModule }) => {
  const [moduleName, setModuleName] = useState('');

  const handleInputChange = (e) => {
    setModuleName(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (moduleName.trim() !== '') {
      handleAddModule(moduleName);
      setModuleName('');
    }
  };

  return (
    <div className="form-control flex flex-row gap-5">
      <input
        type="text"
        placeholder="Denumire Modul"
        className="input input-bordered input-primary w-full max-w-xs"
        onChange={(e) => {
          handleInputChange(e);
        }}
      />
      <button className="btn btn-secondary" onClick={handleAddButtonClick}>
        Adaugă modul
      </button>
    </div>
  );
};

export default ModuleInput;
