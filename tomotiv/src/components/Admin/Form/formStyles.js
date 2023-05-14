import { tw } from 'twind';

export const cardWrapperClass = tw(
  `flex flex-col p-4 border rounded-lg shadow-md`
);
export const cardTitleClass = tw(`font-bold text-lg`);
export const cardButtonClass = tw(
  `text-base p-1.5 rounded-lg focus:outline-none hover:opacity-75 transition-opacity duration-200 ease-in-out`
);
export const deleteButtonClass = tw(
  `${cardButtonClass} text-red-500 hover:text-red-600`
);
export const detailWrapperClass = tw(`flex flex-col space-y-2`);
export const detailItemClass = tw(`flex items-center`);
