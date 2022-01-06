import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconAnchor: [10, 41],
  popupAnchor: [2, -40],


});

// L.Marker.prototype.options.icon = DefaultIcon;


export default class Map extends Component {

  render() {
    if (this.props.data) {
      var places = this.props.data;
    }

    var titleContainer = {
      textAlign: 'center',
      marginBottom: '30px',
      paddingTop: '90px'
    };
    var titleStyle = {
      borderBottom: '3px solid #013220',
      padding: '3px',
      letterSpacing: '3px',
      textTransform: 'uppercase'
    }

    return (
      <section id="map">
        <div style={titleContainer}>
          <h1><span style={titleStyle}>Travel</span></h1>
        </div>
        <div >
          <MapContainer
            style={{ height: '90vh', width: '90wh', margin: "40px" }}
            center={[51.505, -0.09]} zoom={3} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {places.map(p => (
              <Marker position={p.position} icon={DefaultIcon}>
                <Popup>
                  <h1 style={{paddingBottom:'1px', textAlign:'center'}}>{p.name}</h1>
                  <p style={{margin:'1px 0'}}>{p.country}</p>
                </Popup>
              </Marker>
            ))}
          </MapContainer>

        </div>
      </section>
    );
  }
}

