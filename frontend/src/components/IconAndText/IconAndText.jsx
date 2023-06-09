import React from 'react'

const IconAndText = ({icon, heading, p, button}) => {
  return (
    <div className="flex md:w-full lg:w-3/5 p-3 gap-3 justify-between m-auto items-center flex-col md:flex-row lg:flex-row ">
      <div className=" h-full">{icon}</div>
      <div className="w-full prose p-4 flex-end flex-1">
        <h2>{heading}</h2>
        {p}
      </div>
        {button}
    </div>
  );
}

export default IconAndText