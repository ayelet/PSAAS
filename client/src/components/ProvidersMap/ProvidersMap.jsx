// import { GoogleMap, Marker } from "react-google-maps";
import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import "./ProvidersMap.css";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;
const MyMarker = () => <div className="map-marker"></div>;

class ProvidersMap extends Component {
  static defaultProps = {
    center: {
      lat: 32.794044,
      lng: 34.989571,
    },
    zoom: 12,
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "80vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          {/*  <Marker lat={this.props.center.lat} lng={this.props.center.lng} /> */}
          <MyMarker lat={32.794044} lng={34.989571} />
        </GoogleMapReact>
      </div>
    );
  }
}

export default ProvidersMap;
