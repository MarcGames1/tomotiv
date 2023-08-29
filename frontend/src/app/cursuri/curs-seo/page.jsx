'use client';
import React, {useEffect, useState} from 'react';
import Page from '@/app/PageLayout';
import CountdownTimer from '@/components/CountdownTimer';
import useCourseData from '@/app/admin/adminHooks/useCourseData';





const page = () => {


  const { courseData, saveCourseState, getCourseData, isLoading, error } =
    useCourseData('curs-seo');

  const [targetDate, setTargetDate] = useState(null);

 

       useEffect(() => {
         if (isLoading || error) return;
         courseData &&
           courseData.stopInscrieri &&
           setTargetDate(courseData.stopInscrieri);
       }, courseData?.stopInscrieri);
  return (
    <Page>
      <section className="contaiener w-8/12 block m-auto p-5 bg-base-100">
        <div>
          <h1 className="text-3xl lg:text-5xl font-bold">
            <span className="text-primary">
              {' '}
              Învață SEO și dezvoltă-ți un super skill
            </span>{' '}
            în doar 6 săptămâni
          </h1>
        </div>
        <div>
          <CountdownTimer targetDate={targetDate} />
        </div>
      </section>
    </Page>
  );
};

export default page;
