'use client'

import { useRouter } from 'next/router';
import { Context } from '@/context';
import React, { useState, useEffect, useContext } from 'react';
import { toast } from 'react-hot-toast';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';

const SingleCoursePageContent = ({course}) => {

     const {
       name,
       description,
       instructor,
       updatedAt,
       lessons,
       image,
       price,
       paid,
       category,
     } = course;
  const [loading, setLoading] = useState(false);
  const [enrolled, setEnrolled] = useState({});
    const {
      state: { user },
    } = useContext(Context);




const checkEnrollment = async () => {
  const { data } = await axios.get(`/api/check-enrollment/${course._id}`);
  console.log('CHECK ENROLLMENT', data);
  setEnrolled(data);
};


  useEffect(() => {
    if (user && course) checkEnrollment();
  }, [user, course]);

    const handlePaidEnrollment = async () => {
      // console.log("handle paid enrollment");
      try {
        setLoading(true);
        // check if user is logged in
        if (!user) router.push('/login');
        // check if already enrolled
        if (enrolled.status)
          return router.push(`/user/course/${enrolled.course.slug}`);
        const { data } = await axios.post(`/api/paid-enrollment/${course._id}`);
        const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);
        stripe.redirectToCheckout({ sessionId: data });
      } catch (err) {
        toast('Enrollment failed, try again.');
        console.log(err);
        setLoading(false);
      }
    };


     const handleFreeEnrollment = async (e) => {
       // console.log("handle free enrollment");
       e.preventDefault();
       try {
         // check if user is logged in
         if (!user) router.push('/login');
         // check if already enrolled
         if (enrolled.status)
           return router.push(`/user/course/${enrolled.course.slug}`);
         setLoading(true);
         const { data } = await axios.post(
           `/api/free-enrollment/${course._id}`
         );
         toast(data.message);
         setLoading(false);
         router.push(`/user/course/${data.course.slug}`);
       } catch (err) {
         toast('Enrollment failed. Try again.');
         console.log(err);
         setLoading(false);
       }
     };
     
  return (
    <>
      <div>Aici o sa fie Pagina de Vanzare Curs, O sa contina si Descrierea Cursului ( cred ) Putem face fie template fie pagina unica </div>
      

      {enrolled.status ? (
        <></>
      ) : (
        <button
          className="btn btn-primary"
          disabled={loading}
          onClick={paid ? handlePaidEnrollment : handleFreeEnrollment}
        >
          {user
            ? enrolled.status
              ? 'Vezi Cursul'
              : 'Inscrie-te'
            : 'Logheaza-te pentru a te inscrie'}
        </button>
      )}
    </>
  );
}

export default SingleCoursePageContent