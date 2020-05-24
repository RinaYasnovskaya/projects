export const changeInfoCords = (cord) => {
  const blockInfoCords = document.querySelector('.map__info');
  blockInfoCords.innerHTML = '';

  const temp = `<p>Latitude: ${cord.latitude.toFixed(3)}</p>
  <p>Longitude: ${cord.longitude.toFixed(3)}</p>`;
  
  blockInfoCords.innerHTML = temp;
};
