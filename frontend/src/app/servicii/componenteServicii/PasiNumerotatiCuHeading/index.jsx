const PasiNumerotatiCuHeading = ({ heading, etape }) => {
  return (
    <section className=" block m-auto">
      <>{heading}</>
      <div className='flex flex-col items-center'>

      {etape.map((e, idx) => {
          return (
              <div
              key={idx}
              className="alert lg:w-1/2 items-center  justify-items-center m-10 p-5 shadow-lg flex flex-col lg:flex-row"
              >
            <span className={'w-2/12 text-primary text-9xl	'}>{idx + 1}</span>
            <span className="w-10/12 flex flex-col text-3xl">{e} </span>
          </div>
        );
    })}
    </div>
    </section>
  );
};

export default PasiNumerotatiCuHeading