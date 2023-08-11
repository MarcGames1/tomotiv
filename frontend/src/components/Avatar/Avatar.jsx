const Avatar = ({ src, alt }) => {
  return (
    <>
      <div className="avatar m-auto w-full block">
        <div className="h-1/2 my-10 w-1/2 m-auto block">
          <img src={src} style={{ objectFit: 'cover' }} alt={alt} />
        </div>
      </div>
    </>
  );
};


export default Avatar