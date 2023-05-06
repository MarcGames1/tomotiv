import React from 'react';

import Page from '../components/Page';
import LogInForm from '../components/Forms/Login';
import RegisterForm from '../components/Forms/RegisterForm';
import { typography } from '../styles';
import { tw } from 'twind';
const SignIn = () => {
  return (
    <Page>
      <div className={tw('flex items-center flex-col m-4 p-4 gap-4')}>
        <h1 className={typography.h1}>Sign up </h1>
        <RegisterForm />
      </div>
    </Page>
  );
};

export default SignIn;
