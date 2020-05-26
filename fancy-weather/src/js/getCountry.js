import { createURLCountryOrCoords } from "./createURLCountryOrCoords";
import { createFetch } from "./createFetch";

export const getCountry = async (coords) => {
  
  const fetchCoords = createURLCountryOrCoords(coords);
  const resCoords = await createFetch(fetchCoords);
  
  return resCoords;
};
