import React, { useRef, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  MapConsumer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./Map.css";

import axios from "axios";

const options = {
  method: "GET",
  url: "https://google-maps-geocoding.p.rapidapi.com/geocode/json",
  params: { address: "164 Townsend St., San Francisco, CA", language: "en" },
  headers: {
    "x-rapidapi-key": "ae7d7e1bd0msh860dbbbcc2292cfp1af77cjsnfbdf80df8854",
    "x-rapidapi-host": "google-maps-geocoding.p.rapidapi.com",
  },
};

function MyComponent() {
  const map = useMap();
  console.log("map center:", map.getCenter());
  setTimeout(() => {
    map.invalidateSize();
  }, 250);
  map.invalidateSize();
  return null;
}

const Map = (props) => {
  console.log(props);
  return (
    <div className="map">
      <MapContainer center={[28, 77]} zoom={15} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={[28, 77]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker> */}
        {/* <MyComponent /> */}
      </MapContainer>
    </div>
  );
};

export default Map;
