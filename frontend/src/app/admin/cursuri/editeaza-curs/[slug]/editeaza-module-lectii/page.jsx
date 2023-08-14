

import React from 'react';

import { AiOutlineDelete, AiOutlineBook } from 'react-icons/ai';

import EditCourseModulesAndLessons from './editCourseModulesAndLessons';


const page = async ({ params: { slug } }) => {



  return (
    <>
      <h1 className="m-10 lead font-bold text-3xl text-center">
        Editeaza Modulele si Lectiile pentru cursul {slug}
      </h1>

      <EditCourseModulesAndLessons slug={slug} />
    </>
  );
};

export default page;
