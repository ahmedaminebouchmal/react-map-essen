import { useEffect, useState } from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapConfig } from './hooks/useMapConfig';
import MapControls from './controls/MapControls';
import MarkerLayer from './layers/MarkerLayer';
import { defaultMapConfig } from './config/mapConfig';
import L from 'leaflet';

// Fix for default marker icons
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

const MapContainer = () => {
  const { config } = useMapConfig();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) {
    return <div>Loading map...</div>;
  }

  return (
    <LeafletMapContainer 
      center={config.center || defaultMapConfig.center}
      zoom={config.zoom || defaultMapConfig.zoom}
      style={{ 
        height: '100%', 
        width: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0,
        zIndex: 1 
      }}
      zoomControl={false}
    >
      <ZoomControl position="bottomright" />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapControls />
      <MarkerLayer />
    </LeafletMapContainer>
  );
};

export default MapContainer;
