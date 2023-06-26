import React from 'react'
import Page from '../PageLayout'
import CourseCard from '@/components/CourseCard/CourseCard';


async function getData() {
  const res = await fetch(`${process.env.API}/publishedCourses`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}
 

const page = async () => {
     const data = await getData();


     if(data.length <= 0){
      return <>No courses yet</>
     }
  return (
    <Page>
        <pre>{JSON.stringify(data, '', 3)}</pre>
      <div>Cursuri</div>
      {data.map(course =>{
        return <CourseCard key={course._id} {...course} />;
      })}
    </Page>
  );
};

export default page