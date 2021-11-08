import { MapContainer, TileLayer } from 'react-leaflet';
import './MapStyles.css'

const Map = () => {
    return(
      <MapContainer center={[-23.214419631054575, -45.895630324069074]} zoom={13} /*zoomControl={false}*/>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/viniciusbuarque21/ckvn753xj2muc14qsjgmrzduk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmluaWNpdXNidWFycXVlMjEiLCJhIjoiY2t2bjdqdnR6OXN4dTJvcGd4aThyZGNvbyJ9.-oc8x6hUvT3c2rZCuKwQjA"
          attribution="Map data &copy; <a href=&quot;https://www.openstreetmap.org/&quot;>OpenStreetMap</a> contributors, <a href=&quot;https://creativecommons.org/licenses/by-sa/2.0/&quot;>CC-BY-SA</a>, Imagery &copy; <a href=&quot;https://www.mapbox.com/&quot;>Mapbox</a>"
        />
      </MapContainer>
    );
};

export default Map;