import { useEffect } from 'react';
import { useMap, Marker, Popup } from 'react-leaflet';
import { MarkerType } from '../config/types';

interface MarkerData {
  id: string;
  position: [number, number];
  title: string;
  type: MarkerType;
}

const SAMPLE_MARKERS: MarkerData[] = [
  {
    id: '1',
    position: [51.4556, 7.0116],
    title: 'Essen City Center',
    type: MarkerType.LANDMARK
  }
];

const MarkerLayer = () => {
  const map = useMap();

  useEffect(() => {
    // Will add marker data fetching logic here later
  }, [map]);

  return (
    <>
      {SAMPLE_MARKERS.map(marker => (
        <Marker key={marker.id} position={marker.position}>
          <Popup>
            <div>
              <h3>{marker.title}</h3>
              <p>Type: {marker.type}</p>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
};

export default MarkerLayer;
