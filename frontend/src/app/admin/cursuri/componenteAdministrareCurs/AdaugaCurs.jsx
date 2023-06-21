'use client'

import React from 'react'
import Link from 'next/link';
const AdaugaCurs = () => {
  return (
    <Link className="btn btn-primary" href={'/admin/cursuri/creaza-curs/'}>
      Adauga Curs
    </Link>
  );
}

export default AdaugaCurs