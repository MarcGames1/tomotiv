import React from 'react'
import PageFooter from '@/components/Footer';
import Navigation from '@/components/Navigation/Navigation';
const Page = ({children}) => {
  return <>
  <Navigation />
  {children}
  <PageFooter />
  </>;
}

export default Page