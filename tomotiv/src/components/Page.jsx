import React from 'react'
import Navigation from './Navbar/Navigation'
import Footer from './Footer/Footer'
import { tw } from 'twind'
import Head from 'next/head'
const Page = ({children}) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Page