'use client'
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import axios from 'axios';

const StripeSuccess = ({id}) => {
  const searchParams = useSearchParams();
  const search = searchParams.get('userEmail');
  // router
  const router = useRouter();
  const userEmail = router.query;
  console.log(userEmail);
  useEffect(() => {
    if (id) successRequest();
  }, [id]);

  

  const successRequest = async () => {
    const { data } = await axios.get(
      `/api/v2/stripe-success/${id}?userEmail=${search}`
    );
    console.log("SUCCESS REQ DATA", data);
    // router.push(`/`);
  };

  return (
    <>
      <div className="row text-center">
        <div className="col-md-9 pb-5">
          <div className="flex prose justify-center p-5">
           <h1>Iti multumim pentru ca ai cumparat cursul nostru</h1>
           <p>Il poti vedea la seciunea Vezi cursurile mele din contul meu</p>

          </div>
        </div>
        <div className="col-md-3"></div>
      </div>
    </>
  );
};

export default StripeSuccess;
