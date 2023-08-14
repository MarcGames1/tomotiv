import React from 'react';

import EditCourseForm from './editCourseForm';
import Link from 'next/link';

const page = async ({ params: {slug} }) => {


 

  return (
    <>
      <h1 className="m-10 lead font-bold text-3xl text-center">
        Editeaza Cursul {slug}
      </h1>

      <Link
        href={`/admin/cursuri/editeaza-curs/${slug}/editeaza-module-lectii`}
        className="btn btn-accent"
      >
        Editeaza modulele si lectiile
      </Link>

      <EditCourseForm slug={slug} />
    </>
  );
};

export default page;
