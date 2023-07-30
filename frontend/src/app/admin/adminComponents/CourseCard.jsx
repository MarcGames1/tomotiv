'use client'
import React, {useState} from 'react'
import Link from 'next/link';
import Image from 'next/image';
import ApiClient from '@/Classes/ApiClient';
import { config } from '@/dateStatice';
const api = new ApiClient(
  'http://localhost:3000/api' || process.env.NEXT_PUBLIC_API
);

const CourseCard = ({
  _id,
  name,
  slug,
  image = undefined,
  published = false,
  description,
}) => {

  const [isPublished, setIsPublished] = useState(published)
  const handlePublishedChange = async (e) =>{
    e.preventDefault()

     // api call publish course
     await api.put(`/course/${!isPublished ? 'publish' : 'unpublish'}/${_id}`)
     // state change
    setIsPublished(!isPublished);
  }
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl m-10">
        {image && (
          
            <img
              className="h-auto m-5"
              src={`${config.imageApi}?key=${image.Key}`}
              alt={image.Key}
              height={300}
              width={300}
            />
          
        )}
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          {isPublished ? <p>Curs publicat</p> : <p>Curs Nepublicat</p>}
          <input
            type="checkbox"
            className="toggle"
            onChange={handlePublishedChange}
            checked={isPublished}
          />
          <div className="card-actions justify-end">
            <Link
              className={'btn btn-secondary'}
              href={`/admin/cursuri/editeaza-curs/${slug}`}
            >
              Editeaza Cursul
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseCard