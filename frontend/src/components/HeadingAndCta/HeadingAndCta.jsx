import React from 'react'

const HeadingAndCta = ({heading, button}) => {
  return (
    <div className="h-60	flex   w-screen m-auto p-4 text-center bg-base-100 ">
      <div className="prose m-auto text-center">
        <h2 className="">{heading}</h2>
        <div>{button}</div>
      </div>
    </div>
  );
}

export default HeadingAndCta