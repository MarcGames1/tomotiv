import Link from 'next/link';
import React from 'react'
import ApiClient from '@/Classes/ApiClient';
import CourseCard from '../adminComponents/CourseCard';
import AdaugaCurs from './componenteAdministrareCurs/AdaugaCurs';
import CoursesCardsLoader from './componenteAdministrareCurs/CoursesCardsLoader';


const api = process.env.NEXT_PUBLIC_API;


const getCoursesList = async () =>{
  try{
    const res = await fetch(`${api}/courses`);
    if (!res) {
      throw new Error('Failed to fetch data');
    }
    const data = await res.json();
    return data;

  } catch(err) {
    console.log(err);
  }

}

const Cursuri = async () => {
  const data = await getCoursesList();
  const [courses] = await Promise.all([data]);
  
 
  
 
  
  return (
    <>
      <div>cursuri</div>
      <AdaugaCurs />
     <CoursesCardsLoader />
    </>
  );
};

export default Cursuri;