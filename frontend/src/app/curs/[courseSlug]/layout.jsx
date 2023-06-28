import React from 'react'
import NoClickContainer from './noClickContainer';
export const metadata = {
  title: 'Platforma Cursant Tomotiv',
  description: 'Tomotiv ',
  robots: 'noindex, folow',
};

const singleCourseLayout = ({children}) => {
  return (
    <NoClickContainer>
      <>{children}</>
    </NoClickContainer>
  );
}

export default singleCourseLayout