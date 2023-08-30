import React from 'react';

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
     <div>

    <span
      className={`countdown font-mono text-4xl text-white`}
      >
      <span style={{ '--value': value }}> </span>
      {type}
    </span>
      </div>
  );
};

export default DateTimeDisplay;
