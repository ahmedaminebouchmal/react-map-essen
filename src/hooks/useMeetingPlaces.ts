import { useState, useEffect } from 'react';
import { MeetingPlace, fetchMeetingPlaces } from '../services/geoJsonService';

export const useMeetingPlaces = () => {
  const [places, setPlaces] = useState<MeetingPlace[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPlaces = async () => {
      try {
        const data = await fetchMeetingPlaces();
        setPlaces(data);
        setError(null);
      } catch (err) {
        setError('Failed to load meeting places');
        console.error('Error in useMeetingPlaces:', err);
      } finally {
        setLoading(false);
      }
    };

    loadPlaces();
  }, []);

  return { places, loading, error };
};
