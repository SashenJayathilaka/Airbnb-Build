import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

type MapBoxProps = {
  searchResults: any;
};

const MapBox: React.FC<MapBoxProps> = ({ searchResults }) => {
  const [selectedLocation, setSelectedLocation] = useState({});

  const xl = "100";
  const xx = "40";

  const coordinates = searchResults.map((result: any) => ({
    longitude: xl,
    latitude: xx,
  }));

  //const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    longitude: 200,
    latitude: 40,
    zoom: 11,
  });
  return (
    <Map
      mapStyle="mapbox://styles/sashenhasindu/cl72sn1d5000915mob0be9822"
      mapboxAccessToken={process.env.mapbox_key}
      //{...viewport}
      //onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
    >
      {/* {searchResults.map((result: any) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onClick={() => setSelectedLocation(result)}
              className="cursor-pointer text-2xl animate-bounce"
              aria-label="push-pin"
            >
              📌
            </p>
          </Marker>
          {selectedLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))} */}
    </Map>
  );
};
export default MapBox;
