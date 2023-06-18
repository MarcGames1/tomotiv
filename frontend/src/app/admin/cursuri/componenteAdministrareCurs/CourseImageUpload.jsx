// de sters componenta

import React from 'react';
import Image from 'next/image';

const CourseImageUpload = ({ image, onImageUpload, onImageRemove, titluCurs =" " }) => {
  return (
    <div className="container flex items-center">
      <div className="form-control">
        <label className="label">
          <span className="label-text">
            Adauga Imagine reprezentativa pentru curs
          </span>
        </label>
        <label className="input-group">
          <span>Imagine</span>
          <input
            type="file"
            name="file"
            onChange={e =>{onImageUpload(e)}}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </label>
      </div>

      <div className="m-10 form-control">
        <Image className="m-5" width={300} height={300} alt={`imagine reprezentativa ${titluCurs}`} src={image.Location} />
        {image.Location !== '/svg/placeholder 300x300.svg' && (
          <button onClick={e =>{onImageRemove(e)}} className="btn btn-accent">
            Sterge Imaginea
          </button>
        )}
      </div>
    </div>
  );
};

export default CourseImageUpload;
