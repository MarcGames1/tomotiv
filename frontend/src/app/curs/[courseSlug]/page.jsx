import React from 'react';
import Page from '@/app/PageLayout';
import CourseCard from '@/components/CourseCard/CourseCard';
import SingleCourse from './singleCourse';
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

const page = async ({ params: { courseSlug } }) => {
  const data = await getData(courseSlug);
  const [course] = await Promise.all([data]);

  return (
    <Page>
      
      <SingleCourse  course={course} />
    </Page>
  );
};

export default page;
