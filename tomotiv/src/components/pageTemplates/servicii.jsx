import React from 'react'
import Page from '../Page'
import ContactForm from '../Forms/ContactForm'
import HeroSection from '../HeroSection'
import FAQSection from '../FAQ Section/Index'
import { tw } from 'twind'
import { typography } from '../../styles'

const Servicii = ({children = null, title, subtitle, faq, metaTitlu, metaDescriere, canonical}) => {
  return (
    <Page metaDescription={metaDescriere} metaTitle={metaTitlu} canonical={canonical} index>
      <HeroSection title={title} subtitle={subtitle} />
      {children}
      <FAQSection data={faq} />
      <section className={tw('w-full bg-blue-D80')}>
        <span className={`${typography.h1} ${tw('text-center block')}`}>
          Contacteaza-ne!
        </span>
        <ContactForm />
      </section>
    </Page>
  );
}

export default Servicii