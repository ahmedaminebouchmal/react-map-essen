import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import { useMeetingPlaces } from '../../hooks/useMeetingPlaces';
import { MeetingPlaceMarker } from './markers/MeetingPlaceMarker';
import { CircularProgress, Alert } from '@mui/material';
import { LatLngBounds } from 'leaflet';

const MeetingMap = () => {
  const { places, loading, error } = useMeetingPlaces();
  const map = useMap();

  useEffect(() => {
    if (places.length > 0) {
      try {
        const bounds = new LatLngBounds(places.map(place => place.coordinates));
        map.fitBounds(bounds, { 
          padding: [50, 50],
          maxZoom: 15
        });
      } catch (error) {
        // Silently handle error
      }
    }
  }, [places, map]);

  if (loading) {
    return (
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        zIndex: 1000 
      }}>
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return (
      <Alert 
        severity="error" 
        sx={{ 
          position: 'absolute',
          top: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1000
        }}
      >
        {error}
      </Alert>
    );
  }

  return (
    <>
      {places.map(place => (
        <MeetingPlaceMarker key={place.id} place={place} />
      ))}
    </>
  );
};

export default MeetingMap;
