import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import EditCourseForm from './editCourseForm';
import Link from 'next/link';


const api = process.env.API;

const getCourseData = async (slug) => {
 try {
   const res = await fetch(`${api}/course/${slug}`);
   if (!res.ok) {
     throw new Error('Failed to fetch course data');
   }
   const data = await res.json();
   return data;
 } catch (error) {
   console.log(error);
 }
};
const page = async ({ params: {slug} }) => {
  const courseData = await getCourseData(slug);
  const [course] = await Promise.all([courseData])

  

  return (
    <>
      <h1>Editeaza Cursul {slug}</h1>
      
      <EditCourseForm  {...course}/>
      <Link href={`admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii`} className='btn btn-accent'>Editeaza modulele si lectiile</Link>
    </>
  );
};

export default page;
