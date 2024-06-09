import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import Markers from "./Markers";
import MarkerCard from "../assets/Components/MarkerCard";
import useCardStore from "../Global/CardStore";

const Mapview = () => {
    const {view} = useCardStore((state) => state)
    const [viewCoords, setViewCoords] = useState({
        lat: 19.45703294050468,
        lng: -99.1279657493604,
        zoom: 20,
        bounds: null
    });

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
                        southWest: bounds.getSouthWest()
                    }
                });
            }
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
            <MapContainer center={[viewCoords.lat, viewCoords.lng]} zoom={viewCoords.zoom} style={{ height: '93vh', width: '100%'}}>
                <TileLayer 
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Markers />
                <MapEvents />
            </MapContainer>
        </div>
    );
}

export default Mapview;
