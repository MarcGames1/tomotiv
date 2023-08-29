import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
     <div>

    <span
      className={`countdown font-mono text-4xl ${
        isDanger ? 'text-danger' : 'text-secondary'
      }`}
      >
      <span style={{ '--value': value }}> </span>
      {type}
    </span>
      </div>
  );
};

export default DateTimeDisplay;
