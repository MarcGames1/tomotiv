const Card = ({ heading, descriere, icon }) => {
  return (
    <>
      <div className="card min-w-80 w-96 bg-base-100 shadow-xl">
        <div className="card-body flex items-center">
          {icon}
          <div className="card-title">{heading}</div>
          {descriere}
        </div>
      </div>
    </>
  );
};


export default Card