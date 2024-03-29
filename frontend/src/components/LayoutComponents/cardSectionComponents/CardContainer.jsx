const CardContainer = ({ children, idx=1 }) => {
  const cardContainerClass =
    ' bg-base-100 col-span-2 ';

  return <div className={`${cardContainerClass} col-start-${idx}`}>{children}</div>;
};


export default CardContainer;