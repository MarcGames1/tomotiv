

import React from 'react';
import ApiClient from '@/Classes/ApiClient';
import AddLessonForm from './AddLessonForm';

const api = new ApiClient(process.env.API);


const page = async ({ params: { slug, id } }) => {


 
  return (
    <>
      <h1>
        Editeaza Cursul {slug} Modulul {id}
      </h1>
      {/* <pre>{JSON.stringify(course, '', 3)}</pre> */}

      {/* <AddLessonForm
        
      /> */}
    </>
  );
};

export default page;
