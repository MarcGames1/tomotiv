import OptiunePlata from "./obtiunePlata";
const MetodaPlata = ({ metoda_plata, setMetoda_Plata, data }) => {
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
          price={data.price}
          discountedPrice={data.discountedPrice}
        />

        <OptiunePlata
          label="Plata in 2 rate (1 / luna)"
          description="Plata se efectuează în două rate, o dată pe lună."
          value="plataIn2Rate"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
          price={data.price}
          discountedPrice={data.discountedPrice}
        />

        <OptiunePlata
          label="Plata in 6 rate saptamanale"
          description="Plata se efectuează în 6 rate săptămânale."
          value="plataIn6Rate"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
          price={data.price}
          discountedPrice={data.discountedPrice}
        />
      </div>
    </>
  );
};

export default MetodaPlata;
