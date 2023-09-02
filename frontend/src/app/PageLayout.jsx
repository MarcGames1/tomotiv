import React from 'react'
import PageFooter from '@/components/Footer';
import Navigation from '@/components/Navigation/Navigation';
const Page = ({children}) => {
  return <div className='bg-base-100'>
  <Navigation />
  {children}
  <PageFooter />
  </div>;
}

export default Page