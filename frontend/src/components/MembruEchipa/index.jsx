import Avatar from "../Avatar/Avatar";
import Link from "next/link";
const MembruEchipa = ({
  nume,
  prenume,
  poza,
  specializare,
  functie,
  contact,
}) => {
  return (
    <>
      <div className=" w-full justify-center m-auto text-center">
        <Avatar alt={`poza ${prenume} ${nume} ${functie}`} src={poza} />
        <div className="flex flex-col m-auto text-center ">
          <h5 className="text-center font-extrabold my-3 ">
            {prenume} {nume}
          </h5>
          <p className="font-bold my-3">{functie}</p>
          <p className=" mx-10">{specializare}</p>
          <div className="my-3">
            <Link
              href={`/echipa/${prenume.toLowerCase()}-${nume.toLowerCase()}`}
            >
              {' '}
              <button className="btn btn-secondary">Afla mai mult</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};


export default MembruEchipa