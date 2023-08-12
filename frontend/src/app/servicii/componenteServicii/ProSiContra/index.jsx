import { HiBan, HiBadgeCheck } from 'react-icons/hi';

import React from 'react'

const ProAndContraComponent = ({ heading, pro, contra }) => {
  return (
    <>
      {heading}

      <div className="grid grid-flow-row lg:grid-flow-col justify-between mx-5 gap-5 ">
        <div className=" ">
          {pro.heading}
          <ul>
            {pro.args.map((arg, i) => {
              return (
                <li className="alert alert-success font-bold  my-5" key={i}>
                  {arg}
                  <div className="alert-success rounded-full">
                    <HiBadgeCheck color="currentColor" size={'3rem'} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" ">
          {contra.heading}
          <ul>
            {contra.args.map((arg, i) => {
              return (
                <li className="alert alert-error font-bold my-5" key={i}>
                  {arg}
                  <div className="alert-error rounded-full">
                    <HiBan color="currentColor" size={'3rem'} />
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProAndContraComponent;