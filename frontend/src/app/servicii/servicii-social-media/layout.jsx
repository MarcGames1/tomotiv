import React from 'react'
import { meta } from './texte';

export const metadata = {
  title: meta.titlu,
  description: meta.descriere,
  robots: 'index, folow',
};
const layout = ({children}) => {
  return (
    <main>{children}</main>
  )
}

export default layout