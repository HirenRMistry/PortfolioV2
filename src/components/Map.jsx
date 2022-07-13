import React, { Component } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import MarkerPopup from './MarkerPopup';
import createClass from './HelperFunctions';


export default class Map extends Component {
//Clear cache in node and npm install
  render() {
    if (this.props.data) {
      var { places, continents, center, attribution, url } = this.props.data;
    }
    continents.forEach((continent, i) =>
      createClass(`.${continent.replace(" ", "")}Icon`, `filter: hue-rotate(${(i) * 45}deg)`)
    );

    var titleContainer = {
      textAlign: 'center',
      marginBottom: '30px',
      paddingTop: '90px'
    },
      titleStyle = {
        borderBottom: '3px solid #013220',
        padding: '3px',
        letterSpacing: '3px',
        textTransform: 'uppercase'
      },
      mapContainerStyle = {
        height: '90vh',
        width: '90wh',
        margin: "45px",
        zIndex: 1
      }

    return (

      <section id="map">

        <div style={titleContainer}>
          <h1><span style={titleStyle}>Travel</span></h1>
        </div>

        <div>
          <MapContainer
            style={mapContainerStyle}
            center={center} zoom={3} scrollWheelZoom={false}>
            <TileLayer
              attribution={attribution}
              url={url}
            />
            {places.map(place => <MarkerPopup place={place} />)}
          </MapContainer>

        </div>
      </section>
    );
  }
}
//https://codesandbox.io/s/create-simple-map-highlight-regions-custom-colors-6cl66?from-embed=&file=/src/App.tsx

