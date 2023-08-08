import React from 'react';
import Card1 from '../LayoutComponents/cardSectionComponents/Card1/Card1';
import Link from 'next/link';

const Grid3x2 = ({ data }) => {
  const sections = [];

  for (let i = 0; i < data.length; i += 3) {
    return (
      <div
        className="grid grid-cols-3 grid-rows-2 grid-flow-row md:grid-flow-col px-10 gap-5"
        key={i}
      >
        {data.map((item, index) => (
          <Link key={index} href={item.href} className="no-underline">
            <Card1
              small
              className="bg-white shadow-2xl hover:shadow-lg "
              key={index}
              heading={item.label}
              p={item.p}
            >
              {item.icon}
            </Card1>
          </Link>
        ))}
      </div>
    );
  }
};
export default Grid3x2;
