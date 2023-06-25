import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import Link from 'next/link';
import UploadVideoForm from './uploadVideoForm';
import AdaugaLectieContent from './adaugaLectieContent';


const api = new ApiClient(process.env.API);

const page = async ({ params: { slug, id } }) => {
  return (
    <>
      <h1>
       Adauga o lectie in cursul {slug} Modulul {id}
      </h1>
     <AdaugaLectieContent moduleId={id} slug={slug} />
      {/* <pre>{JSON.stringify(course, '', 3)}</pre> */}

      {/* <AddLessonForm
        
      /> */}
    </>
  );
};

export default page;
