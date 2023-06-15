import React from 'react'
import Link from 'next/link';
const CourseCard = ({
  name,
  slug,
  image = undefined,
  published = false,
  description,
}) => {
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        {image && (
          <figure>
            <img src={image} alt={name} />
          </figure>
        )}
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {published ? <p>Curs publicat</p> : <p>Curs Nepublicat</p>}
          <div className="card-actions justify-end">
            <Link href={`/admin/cursuri/editeaza-curs/${slug}`} className="btn btn-primary">
              Editeaza Cursul
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard