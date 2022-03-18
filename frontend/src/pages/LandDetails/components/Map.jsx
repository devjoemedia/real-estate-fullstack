import React from "react";
import GoogleMapReact from "google-map-react";

const Map = ({ lat, lng, title }) => {
  const defaultData = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };

  const MapBody = ({ title }) => {
    return <div>{title}</div>;
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBDpA0dGeYEjwl2qEiDrKpG_ZYshJWeiBI" }}
        defaultCenter={defaultData.center}
        defaultZoom={defaultData.zoom}
      >
        <MapBody lat={lat} lng={lng} title="My Marker" />
      </GoogleMapReact>
    </div>
  );
};

export default Map;
