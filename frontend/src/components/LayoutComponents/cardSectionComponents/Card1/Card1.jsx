import React from 'react'

const Card1 = ({children, heading, p}) => {
  return (
    <div className="flex flex-col items-center p-4 w-full prose ">
      <div className="text-primary">{children}</div>
      <div className='font-bold text-2xl'>{heading}</div>
      <p>{p}</p>
    </div>
  );
}

export default Card1