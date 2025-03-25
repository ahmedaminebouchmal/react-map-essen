import { useState, useCallback } from 'react';
import { MapConfig } from '../config/types';
import { defaultMapConfig } from '../config/mapConfig';

export const useMapConfig = () => {
  const [config, setConfig] = useState<MapConfig>(defaultMapConfig);

  const updateConfig = useCallback((newConfig: Partial<MapConfig>) => {
    setConfig(current => ({
      ...current,
      ...newConfig
    }));
  }, []);

  return {
    config,
    updateConfig
  };
};
