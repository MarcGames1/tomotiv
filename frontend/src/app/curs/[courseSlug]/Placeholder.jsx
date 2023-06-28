import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Placeholder = () => {
  return (
    <div className="flex items-center justify-center h-75vh">
      <div className="flex items-center justify-center space-x-2">
        <span className="text-2xl">Alege modul</span>
        <FaArrowRight className="text-xl" />
      </div>
    </div>
  );
};

export default Placeholder;
