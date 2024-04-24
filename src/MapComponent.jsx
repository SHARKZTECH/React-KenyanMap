import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';

const MapComponent = () => {
  // Dummy GeoJSON data for Kenya with disease levels
  const kenyaData = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {
          name: 'Embu',
          diseaseLevel: 'low',
        },
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [38.65, -0.5],
              [38.8, -0.5],
              [38.8, -0.4],
              [38.65, -0.4],
              [38.65, -0.5],
            ],
          ],
        },
      },
      // Add more regions with their respective disease levels
    ],
  };

  const style = (feature) => {
    // Define your style based on disease level
    const diseaseLevel = feature.properties.diseaseLevel;
    let fillColor;

    if (diseaseLevel === 'low') {
      fillColor = 'green';
    } else if (diseaseLevel === 'mid') {
      fillColor = 'yellow';
    } else if (diseaseLevel === 'high') {
      fillColor = 'red';
    }

    return { fillColor, weight: 2, opacity: 1, color: 'white', fillOpacity: 0.7 };
  };

  // Define the bounds of Kenya
  const kenyaBounds = [
    [-4.65, 33.5], // Southwest coordinates
    [5.0, 42.0],   // Northeast coordinates
  ];

  return (
    <MapContainer bounds={kenyaBounds}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <GeoJSON data={kenyaData} style={style} />
    </MapContainer>
  );
};

export default MapComponent;
