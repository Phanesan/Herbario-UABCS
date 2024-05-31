import React from 'react'
import { Marker } from 'react-leaflet'
import {IconLocation} from './youtube'

function Markers() {
  return (
    <>
    <Marker position={{lat: '19.45703294050468', lng: '-99.1279657493604'}} icon={IconLocation}></Marker>
    <Marker position={{lat: '24.085838', lng: '-110.336562'}} icon={IconLocation}></Marker>
    </>
  )
}

export default Markers
