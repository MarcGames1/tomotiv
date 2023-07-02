'use client'
import React, { useEffect, useState } from 'react';
import ApiClient from '@/Classes/ApiClient';
import useUserRole from '@/hooks/useUserRole';
import UserCourseCard from './userCoursesCard';
import SectiuneAlba from '@/components/LayoutComponents/SectiuneAlba';
import CardContainer from '@/components/LayoutComponents/cardSectionComponents/CardContainer';

const api = new ApiClient(process.env.NEXT_PUBLIC_API);

// /user-courses
export const revalidate = 3600;

const Page = () => {
  const { ok, data, loading } = useUserRole('Subscriber');
  const [userCourses, setUserCourses] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await api.get(`/user-courses`, { withCredentials: true });
      console.log(res);
      if (res && res.error) {
        throw new Error(res.error.message);
      }
      return res;
    };

    const fetchData = async () => {
      const data = await getData();
      setUserCourses(data);
    };

    fetchData();
  }, [loading]);

  return (
    <>
      <main className="m-auto p-10 text-center">
        <h1 className="text-5xl lg:text-7xl py-5 font-bold">Cursurile Tale</h1>
        <div className="flex gap-3 items-center p-5 justify-center">
          {userCourses.map((course) => {
            return <UserCourseCard key={course._id} {...course} />;
          })}
         
        </div>
      </main>
    </>
  );
};

export default Page;
