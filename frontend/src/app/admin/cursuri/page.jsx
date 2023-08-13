import Link from 'next/link';
import React from 'react'
import ApiClient from '@/Classes/ApiClient';
import CourseCard from '../adminComponents/CourseCard';
import AdaugaCurs from './componenteAdministrareCurs/AdaugaCurs';
import CoursesCardsLoader from './componenteAdministrareCurs/CoursesCardsLoader';
import CardList6 from '@/app/servicii/componenteServicii/CardList6';




const Cursuri = async () => {

  
 
  
 
  
  return (
    <>
      <h1 className="text-center text-5xl lg:text-7xl font-bold">cursuri</h1>
        <CoursesCardsLoader />
      <AdaugaCurs />
      
      
    </>
  );
};

export default Cursuri;