import React from 'react';
import { Marker } from 'react-leaflet';
import { IconLocation } from './MarkerIcon';
import { useNavigate } from 'react-router-dom';
import useCardStore from '../Global/CardStore'

function Markers() {
  const {setView, view} = useCardStore((state) => state)

  return (
    <>
      <Marker
        position={{ lat: 19.45703294050468, lng: -99.1279657493604 }}
        icon={IconLocation}
        eventHandlers={{
          click: () => {
            setView(!view)
          },
        }}
      />
      <Marker
        position={{ lat: 24.085838, lng: -110.336562 }}
        icon={IconLocation}
        eventHandlers={{
          click: () => {
            
          },
        }}
      />
    </>
  );
}

export default Markers;
