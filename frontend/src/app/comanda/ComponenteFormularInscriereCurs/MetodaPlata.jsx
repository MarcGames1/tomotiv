const OptiunePlata = ({
  label,
  description,
  value,
  metoda_plata,
  handleOptionChange,
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
      </div>
    </div>
  );
};

const MetodaPlata = ({ metoda_plata, setMetoda_Plata, inputArgs }) => {
  const handleOptionChange = (e) => {
    setMetoda_Plata(e.target.value);
  };

  return (
    <>
      <br />
      <h2 className="text-lg font-bold">Alege varianta de plată</h2>
      <div className="container flex flex-col gap-5">
        <OptiunePlata
          label="Plata o singura data"
          description="Plata se efectuează integral într-o singură tranșă."
          value="plataOData"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
        />

        <OptiunePlata
          label="Plata in 2 rate (1 / luna)"
          description="Plata se efectuează în două rate, o dată pe lună."
          value="plataIn2Rate"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
        />

        <OptiunePlata
          label="Plata in 6 rate saptamanale"
          description="Plata se efectuează în 6 rate săptămânale."
          value="plataIn6Rate"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
        />
      </div>
    </>
  );
};

export default MetodaPlata;
