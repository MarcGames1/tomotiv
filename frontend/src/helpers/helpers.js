export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ro-RO', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
};


export function calculateWeeksBetweenDates(startDate, endDate) {
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000; // 1 săptămână în milisecunde

  const startDateTime = new Date(startDate).getTime(); // Data de început în milisecunde
  const endDateTime = new Date(endDate).getTime(); // Data de sfârșit în milisecunde

  const timeDifference = Math.abs(endDateTime - startDateTime); // Diferența în milisecunde
  const weeksDifference = Math.round(timeDifference / oneWeekInMilliseconds); // Diferența în săptămâni

  return weeksDifference;
}

