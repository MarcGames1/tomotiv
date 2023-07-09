import React from 'react'
import { config } from '@/dateStatice';
import Link from 'next/link';

const cleanDescription = (description) => {
  const cleanedText = description
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, '');
  return cleanedText;
};

const CourseCard = ({ name, description, price, category, paid, image, slug }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={`${config.imageApi}/${image?.Key}`} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{cleanDescription(description.slice(0, 996) + '...')}</p>
        <div className="card-actions justify-end">
          <span className="btn btn-primary">{price} Lei</span>
          <Link href={`/cursuri/${slug}`} className="btn btn-secondary">Citeste mai mult</Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard