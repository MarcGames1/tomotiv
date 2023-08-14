import React from 'react';
import StripeCancel from './stripeCancelContent';

const page = async ({ params: { id } }) => {
  return <StripeCancel id={id} />;
};

export default page;
