
import React from 'react'
import CursSeoMainComponent from './CursSeoMainComponent'
import ApiClient from '@/Classes/ApiClient';


const api = new ApiClient(process.env.API)
async function getData() {
 
  const res = await api.get(
    '/course-data/curs-seo',
   
  );
  console.log(res)
  if(res && res?.error){
   throw new Error('Failed to fetch data');
  }
  return res
}


export const revalidate = 3600;

const VanzareCurs = async () => {

   const data = await getData();
  return (
    <><CursSeoMainComponent {...data} /></>
  )
}

export default VanzareCurs