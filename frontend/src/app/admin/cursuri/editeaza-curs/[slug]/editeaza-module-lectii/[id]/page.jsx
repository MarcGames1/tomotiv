

import React from 'react';
import AddLessonForm from './AddLessonForm';
import { getCourseData } from '@/app/admin/cursuri/helpersAdministrareCurs';


const page = async ({ params: { slug, id } }) => {
  const courseData = await getCourseData(slug);
  const [course] = await Promise.all([courseData]);

 
  return (
    <>
      <h1>
        Editeaza Cursul {slug} Modulul {id}
      </h1>
      <pre>{JSON.stringify(course, '', 3)}</pre>

      <AddLessonForm
        course={course}
        slug={slug}
        module={course.modules.find((m) => m._id === id)}
      />
    </>
  );
};

export default page;
