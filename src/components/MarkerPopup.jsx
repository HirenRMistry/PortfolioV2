import React from 'react';
import { Marker, Popup } from 'react-leaflet'
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

function createIcon(continent) {
  return L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [10, 41],
    popupAnchor: [2, -40],
    className: continent.replace(" ", "") + "Icon"
  });
}

const MarkerPopup = ({ place: { position, continent, name, country,year } }) => {
  var popupStyle = {
    margin: '1px 0',
    paddingBottom: '1px',
    textAlign: 'center'
  };
console.log(position)
  var result = name.map((n, i) => (
    <Marker position={position[i]} icon={createIcon(continent)}>
      <Popup>
        <h1 style={popupStyle}>{n.toUpperCase()}</h1>
        <p style={popupStyle}>{country.length > 1? country[i]:country[0]} ({year})</p>
      </Popup>
    </Marker>
  ))

  return result

}

export default MarkerPopup