'use client'
import React, { useEffect, useState } from 'react'
import ApiClient from '@/Classes/ApiClient';
import CourseCard from '../../adminComponents/CourseCard';
const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath);

export const revalidate = 10;

const getCoursesList = async () =>{
  try{
    const courses = await api.get('/courses');
    if (!courses) {
      throw new Error('Failed to fetch data');
    }
    console.log(courses)
    return courses
  } catch(err) {
    console.log(err);
  }
}
const CoursesCardsLoader =  () => {

    const [courses, setCourses] = useState([])

    useEffect(()=>{
      if(courses.length === 0){
      const updateCourses = async () =>{
        setCourses(await getCoursesList());
      }
      updateCourses();
      }
    },[])
  


      return (
        <>
          {courses.map((c) => {
            console.log(c);
            return (
              <CourseCard
                key={c._id}
                {...c}
                name={c.name}
                slug={c.slug}
                image={c?.image}
                published={c.published}
              />
            );
          })}
        </>
      );
  
}

export default CoursesCardsLoader