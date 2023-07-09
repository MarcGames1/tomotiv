import React from 'react';
import Page from '@/app/PageLayout';
import CourseCard from '@/components/CourseCard/CourseCard';
import SingleCoursePageContent from './singleCoursePageContent';
import ApiClient from '@/Classes/ApiClient';


const api = new ApiClient(process.env.API);

async function getData(slug) {
  const res = await api.get(`/course/${slug}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (res.error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(error.message);
  }

  return res;
}

const page = async ({params:{slug}}) => {
  const data = await getData(slug);
  const [course] = await Promise.all([data])

  return (
    <Page>
      <h1 className="text-5xl lg:text-7xl font-bold">{course.name}</h1>
      <SingleCoursePageContent course={course} />
    </Page>
  );
};

export default page;
