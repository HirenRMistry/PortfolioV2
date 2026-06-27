import React from 'react';
import { Marker, Tooltip } from 'react-leaflet';
import L from 'leaflet';

const CONTINENT_COLOURS = {
  'Europe':        '#3b82f6',
  'Asia':          '#f59e0b',
  'North America': '#10b981',
  'South America': '#ec4899',
  'Africa':        '#f97316',
  'Australia':     '#8b5cf6',
};

function createPulseIcon(color) {
  return L.divIcon({
    className: '',
    iconSize: [20, 20],
    iconAnchor: [10, 10],
    popupAnchor: [0, -10],
    html: `
      <div style="position:relative;width:20px;height:20px;">
        <div style="
          position:absolute;inset:0;border-radius:50%;
          background:${color};opacity:0.25;
          animation:pulse-ring 2s ease-out infinite;
        "></div>
        <div style="
          position:absolute;top:50%;left:50%;
          transform:translate(-50%,-50%);
          width:10px;height:10px;border-radius:50%;
          background:${color};
          box-shadow:0 0 6px ${color};
        "></div>
      </div>
    `,
  });
}

export default function MarkerPopup({ place }) {
  const { position, continent, name, country, year } = place;
  const color = CONTINENT_COLOURS[continent] || '#94a3b8';
  const icon = createPulseIcon(color);

  return name.map((cityName, i) => (
    <Marker key={cityName} position={position[i]} icon={icon}>
      <Tooltip direction="top" offset={[0, -8]} opacity={1}>
        <div className="map-tooltip">
          <strong>{cityName}</strong>
          <span>{country.length > 1 ? country[i] : country[0]} · {year}</span>
        </div>
      </Tooltip>
    </Marker>
  ));
}
