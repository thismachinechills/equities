import React from 'react';
import FarHillsMapLocation from '../assets/images/maps/Farhills-tax-map-2.jpg';

import MapPage from './MapPage';
class FarHillsMap extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <MapPage
        name="FarHills"
        image={FarHillsMapLocation}
        imageAlt="Far Hills Map"
        heading="FAR HILLS"
      />
    );
  }
}

export default FarHillsMap;