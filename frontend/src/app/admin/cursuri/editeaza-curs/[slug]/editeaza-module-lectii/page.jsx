

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



  return (
    <>
      <h1>Editeaza Modulele si Lectiile pentru cursul {slug}</h1>
      
      <EditCourseModulesAndLessons slug={slug} />
    </>
  );
};

export default page;
