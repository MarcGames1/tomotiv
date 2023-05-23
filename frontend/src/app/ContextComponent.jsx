'use client';
import React from 'react'
import { Provider } from '@/context';

const ContextComponent = ({children}) => {
  return <Provider>{children}</Provider>;
}

export default ContextComponent