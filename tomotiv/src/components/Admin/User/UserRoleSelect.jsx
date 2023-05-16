import React from 'react';
import Select from 'react-select';

const options = [
  { value: 'Admin', label: 'Administrator' },
  { value: 'User', label: 'Utilizator' },
];

function UserRoleSelect({ value, onChange }) {
  const handleChange = (selectedOption) => {
    onChange(selectedOption.value);
  };

  const selectedOption = options.find((option) => option.value === value);

  return (
    <Select options={options} onChange={handleChange} value={selectedOption} />
  );
}

export default UserRoleSelect;
