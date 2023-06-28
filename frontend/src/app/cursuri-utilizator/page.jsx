'use client'
import React, { useEffect, useState } from 'react';
import ApiClient from '@/Classes/ApiClient';
import useUserRole from '@/hooks/useUserRole';
import UserCourseCard from './userCoursesCard';

const api = new ApiClient(process.env.NEXT_PUBLIC_API);

// /user-courses
export const revalidate = 3600;

const page = () => {
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
      <pre>{JSON.stringify(userCourses, '', 3)}</pre>
      {userCourses.map(course =>{
        return <UserCourseCard {...course}   />
      })}
    </>
  );
};

export default page;
