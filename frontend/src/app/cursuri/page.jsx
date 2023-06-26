import React from 'react'
import Page from '../PageLayout'
import CourseCard from '@/components/CourseCard/CourseCard';
import ApiClient from '@/Classes/ApiClient';
const api = new ApiClient(process.env.API);
async function getData() {
  const res = await api.get(`/publishedCourses`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors


  return res
}
 

const page = async () => {
     const data = await getData();


     if(Array.isArray(data)  && data?.length <= 0){
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