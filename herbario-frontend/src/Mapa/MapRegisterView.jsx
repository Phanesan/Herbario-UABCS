import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMapEvents, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import MarkerCard from "../assets/Components/MarkerCard";
import useCardStore from "../Global/CardStore";

const MapRegisterView = ({ setCoords, onMarkerClick }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [marker, setMarker] = useState(null);

  const { view } = useCardStore((state) => state);

  const [viewCoords, setViewCoords] = useState({
    lat: null,
    lng: null,
    zoom: 20,
    bounds: null,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
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
      click: (e) => {
        const { lat, lng } = e.latlng;
        setMarker({ lat, lng });
        setCoords({ lat: lat.toFixed(6), lng: lng.toFixed(6) });
        onMarkerClick({ lat, lng });
      },
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
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <MapEvents />
          {marker && <Marker position={[marker.lat, marker.lng]} />}
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapRegisterView;
