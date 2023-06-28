'use client'
import React from 'react'

const NoClickContainer = ({children}) => {
  return <div onContextMenu={(e) => e.preventDefault()}>{children}</div>;
}

export default NoClickContainer