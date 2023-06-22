import React from 'react';
import EditCourseData from './editCourseForm';
import Link from 'next/link';
import { getCourseData } from '../../helpersAdministrareCurs';
import { CourseDataProvider } from '@/app/admin/context/CourseDataContext';
import CourseDataProviderComponent from '../../componenteAdministrareCurs/CourseDataContext';

const page = async ({ params: {slug} }) => {
  const courseData = await getCourseData(slug);
  const [course] = await Promise.all([courseData])

  

  return (
    <CourseDataProviderComponent slug={slug}>
      <h1>Editeaza Cursul {slug}</h1>

      <EditCourseData slug={slug} />
      <Link
        href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii`}
        className="btn btn-accent"
      >
        Editeaza modulele si lectiile
      </Link>
    </CourseDataProviderComponent>
  );
};

export default page;
