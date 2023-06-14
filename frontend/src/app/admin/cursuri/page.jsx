'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import ApiClient from '@/Classes/ApiClient';


const apiPath = process.env.NEXT_PUBLIC_API;
const api = new ApiClient(apiPath)

const getCoursesList = async () =>{
  try{
    const courses = await api.get('/courses');
    if (!courses) {
      throw new Error('Failed to fetch data');
    }
    console.log(courses)
    return courses.json()

  } catch(err) {
    console.log(err);
  }

}

const Cursuri = async () => {
  const [courses, setCourses] = useState([])
 
  useEffect( () =>{
    
 setCourses(getCoursesList())
  }, [])
 
  
  return (
    <>
      <div>cursuri</div>
      <Link href={'/admin/cursuri/creaza-curs/'}>Adauga Curs</Link>
    </>
  );
};

export default Cursuri;