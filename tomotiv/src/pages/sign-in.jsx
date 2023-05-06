import React from 'react'

import Page from '../components/Page';
import LogInForm  from '../components/Forms/Login';
import { links, typography } from '../styles';
import { tw } from 'twind';
const SignIn = () => {
  return (
    <Page>
      <div className={tw('flex items-center flex-col m-4 p-4 gap-4')}>
      <h1 className={typography.h1}>Sign In </h1>

      <LogInForm />
      <span className={`${typography.p} ${links}`}>Am uitat Parola </span>
      </div>
    </Page>
  );
    
    
        
    
}

export default SignIn