import GetPrice from "@/components/GetPrice";
const OptiunePlata = ({
  label,
  description,
  value,
  metoda_plata,
  handleOptionChange,
  price,
  discountedPrice
}) => {
  return (
    <div className="form-control w-full max-w-xs flex flex-row gap-5">
      <input
        type="radio"
        id={value}
        name="metodaPlata"
        value={value}
        checked={metoda_plata === value}
        onChange={handleOptionChange}
      />
      <div className="radio-content">
        <div className="font-bold">{label}</div>
        <div className="text-sm text-gray-500">{description}</div>
        <GetPrice price={price} discountedPrice={discountedPrice} metoda_plata={value}/>
      </div>
    </div>
  );
};

export default OptiunePlata