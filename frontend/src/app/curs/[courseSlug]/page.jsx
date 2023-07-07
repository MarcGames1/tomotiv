import React from 'react';
import Page from '@/app/PageLayout';
import SingleCourse from './singleCourse';
import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.API);

async function getCourseData(slug) {
  const res = await api.get(`/course/${slug}`);
  

  // Recommendation: handle errors
  if (res.error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(error.message);
  }

  return res;
}


const page = async ({ params: { courseSlug } }) => {
  const CourseData = await getCourseData(courseSlug);
  const [course] = await Promise.all([CourseData]);

  return (
    <Page>
      
      <SingleCourse  course={course} />
    </Page>
  );
};

export default page;
