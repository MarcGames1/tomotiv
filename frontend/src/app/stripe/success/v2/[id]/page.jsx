import React from 'react'
import StripeSuccess from './stripeSuccessContent'
import Page from '@/app/PageLayout'

const page = async ({params:{id}}) => {
  return (<Page>
    <StripeSuccess id={id} />
  </Page>

  )
}

export default page