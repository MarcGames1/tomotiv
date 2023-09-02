import React from 'react';
import Page from '@/app/PageLayout';
export const metadata = {
  title: 'Comanda Curs',
  description: 'Tomotiv ',
  robots: 'noindex, folow',
};



const ComandaCursLayout = ({ children }) => {
  return (
    <Page>
      <main>{children}</main>;
    </Page>
  );
};

export default ComandaCursLayout;
