import React from 'react';
import {
  Map, TileLayer, Marker, Popup,
} from 'react-leaflet';
import { FiMapPin } from 'react-icons/fi';

import Aside from '../../components/Aside';

import '../../styles/pages/map.css';

function SiteMap() {
  return (
    <div id="page_map">
      <Aside />
      <Map
        center={[-22.6521336, -43.281157]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX}`}
        />

      </Map>
    </div>
  );
}

export default SiteMap;
