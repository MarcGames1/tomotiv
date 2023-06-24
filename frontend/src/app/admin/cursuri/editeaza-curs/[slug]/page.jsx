import React from 'react';

import EditCourseForm from './editCourseForm';
import Link from 'next/link';
import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.API);
const page = async ({ params: {slug} }) => {


 

  return (
    <>
      <h1>Editeaza Cursul {slug}</h1>
      
      <EditCourseForm  slug={slug}/>
      <Link href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii`} className='btn btn-accent'>Editeaza modulele si lectiile</Link>
    </>
  );
};

export default page;
