import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import EditLessonContent from './EditLessonContent';

const api = new ApiClient(process.env.API);

const page = async ({ params: {slug, id, lessonId}}) => {
  return (
    <>
      <EditLessonContent slug={slug} id={id} lessonId={lessonId} />
    </>
  );
};

export default page;
