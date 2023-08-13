import Image from "next/image";

const Avatar = ({ src, alt }) => {
  return (
    <>
      <div className="avatar m-auto w-full block">
        <div className="relative h-1/2 my-10 overflow-clip w-1/2 m-auto block">
          <img src={src} loading="lazy" alt={alt} />
        </div>
      </div>
    </>
  );
};


export default Avatar