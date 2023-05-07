import React from 'react'
import Page from '../Page'
import ContactForm from '../Forms/ContactForm'
import HeroSection from '../HeroSection'
import Head from 'next/head'
import FAQSection from '../FAQ Section/Index'

const Servicii = ({children = null, title, subtitle, faq, metaTitlu, metaDescriere, canonical}) => {
  return (
    <Page>
        <Head>
            <link rel='canonical' href={canonical} />
            <title>{metaTitlu}</title>
            <meta name='description' content={metaDescriere} />
        </Head>
      <HeroSection
        title={title}
        subtitle={subtitle}
      />
      {children}
      <FAQSection  data={faq}/>
      <ContactForm />
    </Page>
  );
}

export default Servicii