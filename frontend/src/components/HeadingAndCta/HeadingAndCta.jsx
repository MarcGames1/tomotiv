import React from 'react'

const HeadingAndCta = ({heading, button}) => {
  return (
    <div className="  m-auto text-center bg-base-100 ">
      <div className="py-10 gap-11 w-1/2 m-auto	flex flex-col justify-around text-center">
        <h2 className="lg:text-7xl md:text-5xl	font-bold">
          {heading}
        </h2>
        <div>{button}</div>
      </div>
    </div>
  );
}

export default HeadingAndCta