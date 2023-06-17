import React from 'react';

const CoursePaidCheckbox = ({ checked, onChange }) => {
  return (
    <div className="form-control">
      <label className="label cursor-pointer">
        <span className="label-text">Curs Platit? </span>
        <input
          type="checkbox"
          name="paid"
          checked={checked}
          onChange={onChange}
          className="checkbox"
        />
      </label>
    </div>
  );
};

export default CoursePaidCheckbox;
