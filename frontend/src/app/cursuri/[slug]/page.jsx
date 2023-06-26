import React from 'react';
import Page from '@/app/PageLayout';
import CourseCard from '@/components/CourseCard/CourseCard';
import SingleCoursePageContent from './singleCoursePageContent';

async function getData(slug) {
  const res = await fetch(`${process.env.API}/course/${slug}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (res.error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(error.message);
  }

  return res.json();
}

const page = async ({params:{slug}}) => {
  const data = await getData(slug);
  const [course] = await Promise.all([data])

  return (
    <Page>
      <pre>{JSON.stringify(data, '', 3)}</pre>
      <div>Cursul {course?.title}</div>
    <SingleCoursePageContent course={course} />
    </Page>
  );
};

export default page;
