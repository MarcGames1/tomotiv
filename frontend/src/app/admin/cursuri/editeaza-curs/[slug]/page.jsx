import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import EditCourseForm from './editCourseForm';
import Link from 'next/link';


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
const page = async ({ params: {slug} }) => {
  const courseData = await getCourseData(slug);
  const [course] = await Promise.all([courseData])

  return (
    <>
      <h1>Editeaza Cursul {slug}</h1>
      <pre>{JSON.stringify(course, "", 3)}</pre>
      <EditCourseForm  {...course}/>
      <Link href={`admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii`} className='btn btn-accent'>Editeaza modulele si lectiile</Link>
    </>
  );
};

export default page;
