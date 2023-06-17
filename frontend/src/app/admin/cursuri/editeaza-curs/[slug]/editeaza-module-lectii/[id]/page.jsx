

import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import AddLessonForm from './AddLessonForm';

const api = new ApiClient(process.env.API);

const getCourseData = async (slug) => {
  try {
    const data = await api.get(`/course/${slug}`);
    if (!data) {
      return;
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};
const page = async ({ params: { slug, id } }) => {
  const courseData = await getCourseData(slug);
  const [course] = await Promise.all([courseData]);

 
  return (
    <>
      <h1>
        Editeaza Cursul {slug} Modulul {id}
      </h1>
      <pre>{JSON.stringify(course, '', 3)}</pre>

      <AddLessonForm
        course={course}
        slug={slug}
        module={course.modules.find((m) => m._id === id)}
      />
    </>
  );
};

export default page;
