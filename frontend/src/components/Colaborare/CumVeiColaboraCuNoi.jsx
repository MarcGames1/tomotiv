import React from 'react'

const CumVeiColaboraCuNoi = ({items = [{heading:<></>, description:<></>}]}) => {
  if (!items[0].heading && !!items[0].description) return;

  return (
    <div className="text-center">
      <h2 className="text-center"> CUM VEI COLABORA CU NOI</h2>
      {items.map((item, idx) => (
        <div
          className="alert cd  shadow-lg flex flex-col lg:flex-row "
          key={idx}
        >
          {' '}
          {/* Add a unique key to each element in the map */}
          <div className="w-2/12 text-primary text-9xl	">{idx + 1}</div>
          <div className="w-10/12 flex flex-col">
            {item?.heading ? (
              <h3 className="font-bold">{item.heading}</h3>
            ) : null}
            <div className="text-xl">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
}


export default CumVeiColaboraCuNoi