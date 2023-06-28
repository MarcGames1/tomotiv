'use client'
import React, {useState, useContext, useEffect} from 'react'
import { FaTruckLoading } from 'react-icons/fa';
import { Context } from '@/context';
import axios from 'axios';
import Loading from '@/components/Loading/Loading';
import LessonViewComponent from './lessonViewComponent';

const SingleCourse = ({course}) => {

     const [loading, setLoading] = useState(false);
     const [enrolled, setEnrolled] = useState({});
     

     const {
       state: { user },
     } = useContext(Context);

     const checkEnrollment = async () => {
       const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
       console.log('CHECK ENROLLMENT', data);
       setEnrolled(data);
       
        console.log(course)
     };
     useEffect(() => {
       if (user && course) checkEnrollment();
     }, [user, course]);


if(!enrolled.status){
    return (
      <>
        <Loading />
      </>
    );
}
  return (
    <>
      <LessonViewComponent course={course}/>
    </>
      
  );
}

export default SingleCourse