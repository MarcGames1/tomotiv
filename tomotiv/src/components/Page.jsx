import React from 'react'
import Navigation from './Navbar/Navigation'
import Footer from './Footer/Footer'
import { tw } from 'twind'

const Page = ({children}) => {
  return (
    <>
    <Navigation />
    <main>
    {children}
    </main>
    <Footer/>
    </>

    
  )
}

export default Page