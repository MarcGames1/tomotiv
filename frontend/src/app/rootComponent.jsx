import React from 'react'

import { Toaster } from 'react-hot-toast';

import ContextComponent from './ContextComponent';

const RootComponent = ({children}) => {
  return (
    <>
      <ContextComponent>
        <Toaster />
        <>{children}</>
      </ContextComponent>
    </>
  );
  
}

export default RootComponent