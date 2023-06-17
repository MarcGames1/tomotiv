import React from 'react';

const CoursePriceInput = ({ value, onChange }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Pretul Cursului</span>
      </label>
      <label className="input-group">
        <span>Pretul Cursului</span>
        <input
          type="number"
          name="price"
          value={value}
          onChange={onChange}
          className="input input-bordered"
        />
      </label>
    </div>
  );
};

export default CoursePriceInput;
