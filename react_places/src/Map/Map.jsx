import mapboxgl from "mapbox-gl";
import React, { useState } from "react";
import "./Map.css";
export default function Map() {
  mapboxgl.accessToken = process.env.REACT_APP_API_KEY;
  
/*   const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10',
    center: [-77.034084, 38.909671],
    zoom: 13,
    scrollZoom: false
}); */
  return (
    <>
      <div className="sidebar">
        <div className="heading">
          <h1>Our locations</h1>
        </div>
        <div id="listings" className="listings"></div>
      </div>
    <div className="map"></div>
    </>
  );
}
