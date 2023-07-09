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


     if(!Array.isArray(data)  && data?.length <= 0){
      return <>No courses yet</>
     }
  return (
    <Page>
     <h1 className="text-5xl lg:text-7xl font-bold">Cursuri</h1>
     <div className='w-10/12 m-auto'>

      {data && data.map(course =>{
        return <CourseCard key={course._id} {...course} />;
      })}
      </div>
    </Page>
  );
};

export default page