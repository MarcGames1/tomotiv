import Link from 'next/link';
import React from 'react'

const Cursuri = () => {
  return (
    <>
    <div>cursuri</div>
    <Link href={'/admin/cursuri/creaza-curs/'}>Adauga Curs</Link>
    </>
  )
}

export default Cursuri;