import React from 'react'
import { Meta } from './texte';

export const metadata = {
  title: Meta.titlu,
  description: Meta.descriere,
  robots: 'index, folow',
};
const layout = ({children}) => {
  return (
    <main>{children}</main>
  )
}

export default layout