import React from 'react';
import { config } from '@/dateStatice';
import Link from 'next/link';

const cleanDescription = (description) => {
  const cleanedText = description
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, '');
  return cleanedText;
};

const UserCourseCard = ({
  name,
  description,
  price,
  category,
  paid,
  image,
  slug,
}) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`${config.imageApi}/${image?.Key}`} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{cleanDescription(description.slice(0, 996) + '...')}</p>
        <div className="card-actions justify-end">
          <span>{category}</span>
          <Link href={`/curs/${slug}`} className="btn btn-secondary">
            Vezi Cursul
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserCourseCard;
