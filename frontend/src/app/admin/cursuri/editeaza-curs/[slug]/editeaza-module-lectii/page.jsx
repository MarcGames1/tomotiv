

import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai';

import EditCourseModulesAndLessons from './editCourseModulesAndLessons';

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
const page = async ({ params: { slug } }) => {
  const courseData = await getCourseData(slug);
  const [course] = await Promise.all([courseData]);


  return (
    <>
      <h1>Editeaza Modulele si Lectiile pentru cursul {courseData.name}</h1>
      <pre>{JSON.stringify(course, '', 3)}</pre>
      <EditCourseModulesAndLessons {...course} />
    </>
  );
};

export default page;
