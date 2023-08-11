import React from 'react'
import Card from '@/components/Card';
const CardList6 = ({heading=<></>, elemente=[]}) => {
  return (
    <>
      <>{heading}</>
      <div className="flex 	flex-wrap justify-center gap-3">
        {elemente.map((e, idx) => {
          return <Card key={idx} {...e} />;
        })}
      </div>
    </>
  );
}

export default CardList6



