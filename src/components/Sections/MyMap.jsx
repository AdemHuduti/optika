import React, { useState, useRef } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "650px",
};

const center = {
  lat: 43.83158008909691,
  lng: 18.290301684811293,
};

function MyMapComponent() {
  const mapRef = useRef(null);
  const [position, setPosition] = useState({
    lat: 43.83140297830998,
    lng: 18.290270032948474,
  });

  function handleLoad(map) {
    mapRef.current = map;
  }

  function handleCenter() {
    if (!mapRef.current) return;

    const newPos = mapRef.current.getCenter().toJSON();
    setPosition(newPos);
  }

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCghXcUHKXomHySfeJEmr5PDNfMmNEZ6kE",
  });


  
  return isLoaded ? (
    <GoogleMap
      zoom={18}
      onLoad={handleLoad}
      onDragEnd={handleCenter}
      center={position}
      id="map"
      mapContainerStyle={{
        height: "400px",
        width: "100%",
      }}
    >
      <Marker position={{ lat: 43.83140297830998, lng: 18.290270032948474 }} />
    </GoogleMap>
  ) : (
    <>Loading...</>
  );
}

export default React.memo(MyMapComponent);
