import React from 'react'

const IconAndText = ({icon, heading, p, button}) => {
  return (
    <div className="flex md:w-full w-3/5 p-3 gap-3 justify-around m-auto items-center flex-col md:flex-row lg:flex-row ">
      <div className=" h-full">{icon}</div>
      <div className="w-full prose p-4 flex-end flex-1">
        <h2>{heading}</h2>
        {p}
        {button}
      </div>
    </div>
  );
}

export default IconAndText