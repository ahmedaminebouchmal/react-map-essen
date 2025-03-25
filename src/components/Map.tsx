import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/node_modules/leaflet/dist/images/marker-icon-2x.png',
  iconUrl: '/node_modules/leaflet/dist/images/marker-icon.png',
  shadowUrl: '/node_modules/leaflet/dist/images/marker-shadow.png',
});

const Map = () => {
  const position: [number, number] = [51.4556, 7.0116];

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      style={{ width: '100%', height: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Welcome to Essen!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
