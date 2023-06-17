import React from 'react';

const CourseCategoryInput = ({ value, onChange }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Categorie</span>
      </label>
      <label className="input-group">
        <span>Categorie</span>
        <input
          type="text"
          name="category"
          value={value}
          onChange={onChange}
          className="input input-bordered"
        />
      </label>
    </div>
  );
};

export default CourseCategoryInput;
