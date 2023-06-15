import React from 'react'

const EditCourseForm = ({name}) => {
  return (
    <form>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Titlu Curs</span>
        </label>
        <label className="input-group">
          <span>Titlu</span>
          <input
            type="text"
            value={name}
            className="input input-bordered"
          />
        </label>
      </div>
    </form>
  );
}

export default EditCourseForm