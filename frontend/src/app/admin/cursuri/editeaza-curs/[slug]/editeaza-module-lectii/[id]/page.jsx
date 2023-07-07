import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import Link from 'next/link';
import ListLessonsInModule from './listLessonsInModule';


const page = async ({ params: { slug, id } }) => {


 
  return (
    <>
      <h1 className='text-4xl text-center'>
        Editeaza Modul
      </h1>
      <Link className='btn btn-primary m-auto' href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii/${id}/adauga-lectie`}>Adauga o Lectie Noua</Link>
      
      <ListLessonsInModule slug={slug} id={id} />
    </>
  );
};

export default page;
