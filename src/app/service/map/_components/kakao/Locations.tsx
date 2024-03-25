/* eslint-disable lines-around-directive */
'use client';
import { useEffect, useState } from 'react';

export default function Location() {
  const [location, setLocation] = useState<
    { latitude: number; longitude: number } | string
  >('');

  const success = (position: GeolocationPosition) => {
    setLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude,
    });
  };

  const handleError = () => {
    setLocation({
      latitude: 37.483034,
      longitude: 126.902435,
    });
    console.log('Failed to retrieve location');
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, handleError);
    } else {
      handleError(); // geolocation이 없을때 에러처리
    }
  }, []);

  return location;
}
