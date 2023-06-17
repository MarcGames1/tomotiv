'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ApiClient from '@/Classes/ApiClient';
import CourseCard from '../adminComponents/CourseCard';


const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath)

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

const Cursuri = async () => {

  const courses = await Promise.all( await getCoursesList());
  
 
  
 
  
  return (
    <>
      <div>cursuri</div>
      <Link className='btn btn-primary' href={'/admin/cursuri/creaza-curs/'}>Adauga Curs</Link>
      { courses.map(c =>{
        console.log(c)
        return <CourseCard key={c._id} {...c} name={c.name} slug={c.slug} image={c?.image} published={c.published} />
      })}
    </>
  );
};

export default Cursuri;