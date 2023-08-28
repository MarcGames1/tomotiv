import React from 'react'
import AdaugaCurs from './componenteAdministrareCurs/AdaugaCurs';
import CoursesCardsLoader from './componenteAdministrareCurs/CoursesCardsLoader';




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