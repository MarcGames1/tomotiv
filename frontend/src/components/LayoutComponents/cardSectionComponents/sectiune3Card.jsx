import React from 'react'
import GridColsd10 from './GridColsd10'
import Card1 from './Card1/Card1'
import { IoIosPeople } from 'react-icons/io'

const Sectiune3Card = ({className, children}) => {

   
  return (
    <>
      
      <div className={`${className} `}>
        <GridColsd10>{children}</GridColsd10>
      </div>
    </>
  );
}

export default Sectiune3Card


