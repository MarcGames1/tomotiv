import Link from 'next/link';
import React from 'react'
import ApiClient from '@/Classes/ApiClient';
import CourseCard from '../adminComponents/CourseCard';
import AdaugaCurs from './componenteAdministrareCurs/AdaugaCurs';
import CoursesCardsLoader from './componenteAdministrareCurs/CoursesCardsLoader';




const Cursuri = async () => {

  
 
  
 
  
  return (
    <>
      <h1 className="text-5xl lg:text-7xl font-bold">cursuri</h1>
      <AdaugaCurs />
      <CoursesCardsLoader />
    </>
  );
};

export default Cursuri;