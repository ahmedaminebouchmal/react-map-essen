import { useEffect, useState } from 'react';
import { MapContainer as LeafletMapContainer, TileLayer, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useMapConfig } from './hooks/useMapConfig';
import MapControls from './controls/MapControls';
import MeetingMap from './MeetingMap';
import { defaultMapConfig } from './config/mapConfig';
import './utils/leafletIcons';  // Initialize Leaflet icons

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
      <MeetingMap />
    </LeafletMapContainer>
  );
};

export default MapContainer;
