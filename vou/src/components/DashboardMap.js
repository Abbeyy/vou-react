import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
    width: '100%',
    height: '60%',
  };

class DashboardMap extends React.Component {
    render() {
        return (
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyCEYD3tMnyIsYca5sFWENxj0oJXBVqjJb8'
  })(DashboardMap);


//   AIzaSyCEYD3tMnyIsYca5sFWENxj0oJXBVqjJb8