import React from "react";
import Marker from "../assets/icons/Marker.svg"
import L from "leaflet"

export const IconLocation = L.icon({
  iconUrl:Marker,
  iconRetinaUrl:Marker,
  iconAnchor:null,
  shadowUrl:null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35,35],
  className: "leaflet-venue-icon"
})

