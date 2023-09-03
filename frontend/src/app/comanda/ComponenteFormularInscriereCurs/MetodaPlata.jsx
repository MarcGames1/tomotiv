import OptiunePlata from "./obtiunePlata";
const MetodaPlata = ({ metoda_plata, setMetoda_Plata, price = 0, discountedPrice=0 }) => {
  const handleOptionChange = (e) => {
    setMetoda_Plata(e.target.value);
  };

  return (
    <>
      <br />
      <h2 className="text-lg font-bold">Alege varianta de plată cu cardul</h2>
      <p>Gestionata de platforma stripe.com</p>
      <div className="container flex flex-col gap-5">
        <OptiunePlata
          label="Plata o singura data"
          description="Plata se efectuează integral într-o singură tranșă."
          value="plataOData"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
          price={price}
          discountedPrice={discountedPrice}
        />

        <OptiunePlata
          label="Plata in 2 rate (1 / luna)"
          description="Plata se efectuează în două transe una astazi si a 2-a luna viitoare "
          value="plataIn2Rate"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
          price={price}
          discountedPrice={discountedPrice}
        />

        <OptiunePlata
          label="Plata in 6 rate saptamanale"
          description="Plata se efectuează în 6 transe, o transa in fiecare saptamana"
          value="plataIn6Rate"
          metoda_plata={metoda_plata}
          handleOptionChange={handleOptionChange}
          price={price}
          discountedPrice={discountedPrice}
        />
      </div>
    </>
  );
};

export default MetodaPlata;
