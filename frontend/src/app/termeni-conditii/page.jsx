import Link from 'next/link';
import React from 'react'
import TermeniSiConditii from './TermeniSiConditii';
import Page from '../PageLayout';

const dateLegale = {
  site: <Link href={'https://tomotiv.ro/'}>tomotiv.ro</Link>,
  dateFirma: {
    nume: <>SPEEDY BIKES SRL</>,
    sediuSocial: <>Str. ZAHARIA STANCU, nr.6F,bl. 16 et.3, ap.306</>,
    regCom: <>J08/2387/2019 </>,
    cui: <>41397812</>,
    cont: <>RO67 BREL 0002 0035 9868 0100, deschis la Libra Bank</>,
    reprezentant: <>Marcu Alexandru, in calitate de administrator</>,
    email: <>contact@tomotiv.ro</>,
  },
};



const page = () => {
  return (
    <Page>
   <TermeniSiConditii {...dateLegale} />
    </Page>

  );
}

export default page