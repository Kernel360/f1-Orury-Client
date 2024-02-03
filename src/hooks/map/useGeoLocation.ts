import { DEFAULT_POSITION } from '@/constants/map';
import { useState, useEffect } from 'react';

interface IPosition {
  latitude: number;
  longitude: number;
}

export const useGeoLocation = (options = {}) => {
  const [location, setLocation] = useState<IPosition>({ ...DEFAULT_POSITION });
  const [error, setError] = useState('');

  const handleSuccess = (pos: GeolocationPosition) => {
    const { latitude, longitude } = pos.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (err: GeolocationPositionError) => {
    setError(err.message);
  };

  useEffect(() => {
    const { geolocation } = navigator;

    if (!geolocation) {
      setError('Geolocation is not supported.');
      return;
    }

    geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};
