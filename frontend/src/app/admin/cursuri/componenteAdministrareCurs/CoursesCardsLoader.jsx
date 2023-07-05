'use client'
import React from 'react'
import ApiClient from '@/Classes/ApiClient';
import CourseCard from '../../adminComponents/CourseCard';
const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath);
const apiP = `${process.env.NEXT_PUBLIC_API}/courses`

export const revalidate = 10;

const getCoursesList = async () =>{
  try{
    const courses = await fetch(apiP, { next: { revalidate: 60 } });
    if (!courses) {
      throw new Error('Failed to fetch data');
    }
    console.log(courses)
    return courses.json()
  } catch(err) {
    console.log(err);
  }
}
const CoursesCardsLoader = async () => {

    const courses = await getCoursesList()
    


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