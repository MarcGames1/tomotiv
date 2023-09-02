import Page from '@/app/PageLayout';



import React from 'react'
import ComandaCursSeoMainComponent from './MainComponent';



import ApiClient from '@/Classes/ApiClient';

const api = new ApiClient(process.env.API);
async function getData() {
  const res = await api.get('/course-data/curs-seo');
  console.log(res);
  if (res && res?.error) {
    throw new Error('Failed to fetch data');
  }
  return res;
}

const ComandaCursSeo = async () => {
  const data = await getData();
  if (data && data.deschisInscrieri) {
    return (
      <>
        <ComandaCursSeoMainComponent />
      </>
    );
  }
  return (
    <>
      Inscrierile la acest curs nu sunt inca deschise
    </>
  );
};

const ComandaCursSeoPage = () =>{
  return<>
  <Page>
    <ComandaCursSeo />
  </Page>
  </>
}

export default ComandaCursSeoPage