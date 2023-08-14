'use client'
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

const StripeCancel = ({id}) => {
  // router
  const router = useRouter();
  

  useEffect(() => {
    if (id) successRequest();
  }, [id]);

  

  const successRequest = async () => {
    const { data } = await axios.get(`/api/stripe-success/${id}`);
    console.log("SUCCESS REQ DATA", data);
    router.push(`/curs/${data.course.slug}`);
  };

  return (
    <>
      <div className="row text-center">
        <div className="col-md-9 pb-5">
          <div className="flex prose justify-center p-5">
           <h1>Plata s-a anulat</h1>
           <p>Nu vei fi taxat</p>

          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};

export default StripeCancel;
