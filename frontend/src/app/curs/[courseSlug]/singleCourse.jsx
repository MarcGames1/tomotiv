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
     
     
     

     const {state , dispatch} = useContext(Context);

     const { user, progress } = state

     const checkEnrollment = async () => {
       const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
       console.log('CHECK ENROLLMENT', data);
       setEnrolled(data);
       console.log(data, 'CHECK ENROLLMENT DATA ')
      const {status} = data
      localStorage.setItem('status', JSON.stringify(status));
      dispatch({type: 'GET_PROGRESS', payload: status})
      
      
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
      {course ? <LessonViewComponent courseId={course._id}  course={course}/> : <><Loading /></>}
    </>
      
  );
}

export default SingleCourse