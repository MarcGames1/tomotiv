import React from 'react'
import StripeSuccess from './stripeSuccessContent'

const page = async ({params:{id}}) => {
  return (
    <StripeSuccess id={id} />
  )
}

export default page