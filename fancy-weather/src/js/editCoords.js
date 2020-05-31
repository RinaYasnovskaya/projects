export const editCoords = (coord) => {
  const start = coord.substring(0, coord.indexOf("'") + 1);
  const end = coord.substring(coord.indexOf("''") + 2);
  return `${start}${end}`;
};
