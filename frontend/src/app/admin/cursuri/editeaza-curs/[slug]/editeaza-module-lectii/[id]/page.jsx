import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import Link from 'next/link';
import ListLessonsInModule from './listLessonsInModule';


const page = async ({ params: { slug, id } }) => {


 
  return (
    <>
      <h1>
        Editeaza Cursul {slug} Modulul {id}
      </h1>
      <Link href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii/${id}/adauga-lectie`}>Adauga o Lectie Noua</Link>
      {/* <pre>{JSON.stringify(course, '', 3)}</pre> */}

      {/* <AddLessonForm
        
      /> */}
      <ListLessonsInModule slug={slug} id={id} />
    </>
  );
};

export default page;
