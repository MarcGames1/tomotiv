'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const StripeSuccess = ({id}) => {
  // router
  const router = useRouter();
  

  useEffect(() => {
    if (id) successRequest();
  }, [id]);

  console.log(id);

  const successRequest = async () => {
    const { data } = await axios.get(`/api/stripe-success/${id}`);
    console.log("SUCCESS REQ DATA", data);
    router.push(`/user/course/${data.course.slug}`);
  };

  return (
    <>
      <div className="row text-center">
        <div className="col-md-9 pb-5">
          <div className="d-flex justify-content-center p-5">
           
          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};

export default StripeSuccess;
