import React from "react";
import { Marker } from "react-leaflet";
import { IconLocation } from "./MarkerIcon";
import { useNavigate } from "react-router-dom";
import useCardStore from "../Global/CardStore";

function Markers({ lat, lng, data }) {
  const { setView, view, setData } = useCardStore((state) => state);

  return (
    <>
      <Marker
        position={{ lat: lat, lng: lng }}
        icon={IconLocation}
        eventHandlers={{
          click: () => {
            setView(!view);
            setData(data);
          },
        }}
      />
    </>
  );
}

export default Markers;
