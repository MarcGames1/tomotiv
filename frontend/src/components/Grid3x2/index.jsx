import React from 'react';
import Card1 from '../LayoutComponents/cardSectionComponents/Card1/Card1';
import Link from 'next/link';

const Grid3x2 = ({ data }) => {
  const sections = [];

  for (let i = 0; i < data.length; i += 3) {
    return (
      <div
        className="grid items-center sm:grid-cols-1 md:grid-flow-row md:grid-cols-1 lg:grid-cols-3  px-10 gap-5"
        key={i}
      >
        {data.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="hover:underline transition-all duration-700 no-underline"
          >
            <Card1
              small
              className="bg-white transition-all duration-500 shadow-2xl hover:bg-primary hover:shadow-lg "
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
