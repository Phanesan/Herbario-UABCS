import React from "react";

import {MapContainer, TileLayer} from "react-leaflet"
import "leaflet/dist/leaflet.css"

import Markers from "./Markers";

const Mapview = () => {
    return <MapContainer center={{lat: '19.45703294050468', lng: '-99.1279657493604'}} zoom={20}>
        
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'>

        </TileLayer>
        <Markers></Markers>
    </MapContainer>
}

export default Mapview