import { mainProperties } from './main';

export const createMap = () => {
  try{
    document.querySelector('#map').innerHTML = '';
    const latitude = (mainProperties.getCoords())[0];
    const longitude = (mainProperties.getCoords())[1];

    const mapBoxGl = require('mapbox-gl/dist/mapbox-gl.js');
    mapBoxGl.accessToken = 'pk.eyJ1IjoicmluYS1yaW5hIiwiYSI6ImNrYWwwZzVrYzA3OXAyeW15M2hlYWw0MHIifQ.Ql70vmV_Oxw2Zz1U96m04Q';

    const map = new mapBoxGl.Map({
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [longitude, latitude],
      zoom: 8
    });

    const marker = new mapBoxGl.Marker()
      .setLngLat([longitude, latitude])
      .addTo(map);
  } catch(err) {
    console.log('error');
  }
  
};
