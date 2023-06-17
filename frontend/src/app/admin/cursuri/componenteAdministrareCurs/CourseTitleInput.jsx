import React from 'react';

const CourseTitleInput = ({ value, onChange }) => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Titlu Curs</span>
      </label>
      <label className="input-group">
        <span>Titlu Curs</span>
        <input
          type="text"
          name="name"
          value={value}
          onChange={onChange}
          className="input input-bordered"
        />
      </label>
    </div>
  );
};

export default CourseTitleInput;
