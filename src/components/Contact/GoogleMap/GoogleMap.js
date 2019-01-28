import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class GoogleMap extends Component {
  static defaultProps = {
    center: {
        lat: 59.95,
        lng: 30.33
    },
    zoom: 11
  };
 
  render() {
      return (
        <div style={{ height: '500px', width: '100%' }}>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBta4EoMuPGC-p7OZgurI_BkA_3o-YD_S0'}}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
          >
            <AnyReactComponent
              lat={59.955413}
              lng={30.337844}
              text={'Kreyser Avrora'}
            />
          </GoogleMapReact>
        </div>
      );
    }
}
 
export default GoogleMap;