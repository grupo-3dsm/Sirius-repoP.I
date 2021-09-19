// Settings for the map goes inside this file
import mapStyles from './mapStyles';


export const containerStyle = {
  width: '100%',
  height: '100vh'
};

// Center on São José dos Campos
export const center = {
  lat: 23.10,
  lng: 45.53
};

// Disable default UI
export const options = {
  styles: mapStyles,
  disableDefaultUI: false,
  zoomControl: false
};


     