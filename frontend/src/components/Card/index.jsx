const Card = ({ heading, descriere, icon, numbered=false , index=null}) => {
  return (
    <>
      <div className="card min-w-80 w-96 bg-base-100 shadow-xl">
        <div className="card-body flex items-center prose">
          {numbered ? (
            <div className="p-5 text-2xl prose text-center text-base-100 font-bold h-[80px] w-[80px] rounded-full bg-secondary ring-2 ring-white">
              {index + 1}
            </div>
          ) : (
            icon
          )}
          <div className="card-title">{heading}</div>
          {descriere}
        </div>
      </div>
    </>
  );
};


export default Card