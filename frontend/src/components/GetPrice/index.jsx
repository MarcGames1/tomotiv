const GetPrice = ({
  price = 3000,
  discountedPrice = 0,
  metoda_plata = 'plataOData',
}) => {
  
  
    const calculateFinalPrice = (metoda_plata , price) => {
    if (price === null || price === undefined) {
      return ''; // Sau puteți returna un mesaj de eroare sau o valoare implicită
    }

    switch (metoda_plata) {
      case 'plataIn2Rate':
        return ((price * 1.1) / 2).toFixed(2); // Adaugă 10% și împarte la 2 rate
      case 'plataIn6Rate':
        return ((price * 1.2) / 6).toFixed(2); // Adaugă 20% și împarte la 6 rate
      default:
        return price.toFixed(2); // Plata o singura data, prețul rămâne neschimbat
    }
  };

  const finalPrice = calculateFinalPrice(metoda_plata , price);
  const finalDiscountedPrice = calculateFinalPrice(
    metoda_plata,
    discountedPrice
  );

  // Verificați condițiile pentru afișarea prețurilor
  if (finalPrice === finalDiscountedPrice) {
    return <span className="text-xl font-semibold">{finalPrice} lei</span>;
  } else if (finalPrice > finalDiscountedPrice) {
    const discountPercentage =
      ((finalPrice - finalDiscountedPrice) / finalPrice) * 100;

    return (
      <div className="relative">
        <span className="text-xl line-through text-gray-500">
          {finalPrice} lei
        </span>
        <span className="text-xl font-semibold ml-2">
          {finalDiscountedPrice} lei
        </span>
        <span className="badge bg-red-500 text-white rounded-full mx2 px-2 py-1">
          {Math.round(discountPercentage)}%
        </span>
      </div>
    );
  } else {
    return <span className="text-xl  font-semibold">{finalPrice} lei</span>;
  }
};

export default GetPrice