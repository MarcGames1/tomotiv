'use client'
import React from 'react'
import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.API);
// /user-courses
// export const revalidate = 3600;
async function getData() {
  const res = await api.get(`/user-courses`);
  console.log(res)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (res && res.error) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error(res.error.message);
  }

  return res;
}
 
const page = async () => {

       const data = await getData();


  return (
    <><pre>{JSON.stringify(data, '', 3)}</pre></>
  )
}

export default page