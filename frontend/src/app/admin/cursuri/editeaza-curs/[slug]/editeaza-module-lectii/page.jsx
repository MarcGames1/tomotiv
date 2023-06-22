'use client'

import React, { useContext } from 'react';

import EditCourseModulesAndLessons from './editCourseModulesAndLessons';
import { CourseDataContext, CourseDataProvider } from '@/app/admin/context/CourseDataContext';
import CourseDataProviderComponent from '../../../componenteAdministrareCurs/CourseDataContext';


const page = async ({params}) => {




 
  return (
    <CourseDataProviderComponent slug={params.slug}>
      <Content />
   
    </CourseDataProviderComponent>
  );
};

export default page;


const Content = () =>{
 const {
   courseData,
   setCourseData,
   slug,
   setSlug,
   isLoading,
   error,
   handleSaveCourse,
   updateCourseData,
 } = useContext(CourseDataContext);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <h1>Editeaza Modulele si Lectiile pentru cursul {courseData.name}</h1>
      <pre>{JSON.stringify(courseData, '', 3)}</pre>
      <EditCourseModulesAndLessons />
    </>
  );
}