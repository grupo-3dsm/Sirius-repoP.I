import { Component } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletDraw } from "../../components/LeafletDraw";
import "./MapStyles.css";

export default class Map extends Component  {

  render(){
    return (
      <div>
        <MapContainer
          center={[-23.214419631054575, -45.895630324069074]}
          zoom={13} /*zoomControl={false}*/
        >
            <TileLayer
              url="https://api.mapbox.com/styles/v1/viniciusbuarque21/ckvn753xj2muc14qsjgmrzduk/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidmluaWNpdXNidWFycXVlMjEiLCJhIjoiY2t2bjdqdnR6OXN4dTJvcGd4aThyZGNvbyJ9.-oc8x6hUvT3c2rZCuKwQjA"
              attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
            />
          <LeafletDraw />
        </MapContainer>
      </div>
    );
  }
};
