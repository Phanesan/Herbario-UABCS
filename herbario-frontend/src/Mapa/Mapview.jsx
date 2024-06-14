import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Markers from "./Markers";
import MarkerCard from "../assets/Components/MarkerCard";
import useCardStore from "../Global/CardStore";
import { fetchObtainObservationAPI } from "../Services/HerbarioService";

const MapView = ({ setCoords }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [marker, setMarker] = useState(null);

  const { view } = useCardStore((state) => state);

  const [viewCoords, setViewCoords] = useState({
    lat: null,
    lng: null,
    zoom: 7.3,
    bounds: null,
  });

  useEffect(() => {
    setLatitude(25.571426);
    setLongitude(-111.534240);

    const obtainObservations = async () => {
      try {
        const response = await fetchObtainObservationAPI();
        console.log("MARKER:",response);
        setMarker(response.message);
      } catch (error) {}
    };
    obtainObservations();
  }, []);

  useEffect(() => {
    if (latitude !== null && longitude !== null) {
      setViewCoords((prevCoords) => ({
        ...prevCoords,
        lat: latitude,
        lng: longitude,
      }));
    }
  }, [latitude, longitude]);

  const MapEvents = () => {
    const map = useMapEvents({
      moveend: () => {
        const center = map.getCenter();
        const zoom = map.getZoom();
        const bounds = map.getBounds();
        setViewCoords({
          lat: center.lat,
          lng: center.lng,
          zoom: zoom,
          bounds: {
            northEast: bounds.getNorthEast(),
            northWest: bounds.getNorthWest(),
            southEast: bounds.getSouthEast(),
            southWest: bounds.getSouthWest(),
          },
        });
      },
    });
    return null;
  };

  return (
    <div className="relative overflow-y-hidden">
      {view && (
        <div className="absolute top-0 right-0 h-full z-[410]">
          <MarkerCard />
        </div>
      )}
      {viewCoords.lat !== null && viewCoords.lng !== null ? (
        <MapContainer
          center={[viewCoords.lat, viewCoords.lng]}
          zoom={viewCoords.zoom}
          style={{ height: "93vh", width: "100%" }}
        >
          {marker &&
            marker.map((item, index) => {
              return (
                <Markers
                  key={index}
                  lat={item.latitud}
                  lng={item.longitud}
                  data={item}
                ></Markers>
              );
            })}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapEvents />
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapView;
