import React from 'react';
import Head from 'next/head';
import Page from '../components/Page';
import LogInForm from '../components/Forms/Login';
import RegisterForm from '../components/Forms/RegisterForm';
import { typography } from '../styles';
import { tw } from 'twind';
const SignIn = () => {
  return (
    <Page>
      <Head>
        <meta name="robots" content="noindex,follow" />
        <link rel="canonical" href="https://tomotiv.ro/sign-up/" />
        <title>Inregistrare - Tomotiv.ro</title>
      </Head>
      <div className={tw('flex items-center flex-col m-4 p-4 gap-4')}>
        <h1 className={typography.h1}>Inregistrare</h1>
        <RegisterForm />
      </div>
    </Page>
  );
};

export default SignIn;
