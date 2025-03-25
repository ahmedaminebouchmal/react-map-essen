import { LatLngTuple } from 'leaflet';

// Map Configuration Types
export interface MapConfig {
  center: LatLngTuple;
  zoom: number;
  maxZoom: number;
  minZoom: number;
}

// Marker Types
export interface MapMarker {
  id: string;
  position: LatLngTuple;
  title: string;
  description?: string;
  type: MarkerType;
}

export enum MarkerType {
  PROJECT = 'project',
  LANDMARK = 'landmark',
  INFRASTRUCTURE = 'infrastructure'
}

// Control Types
export interface MapControl {
  id: string;
  position: 'topleft' | 'topright' | 'bottomleft' | 'bottomright';
  visible: boolean;
}

// Layer Types
export interface MapLayer {
  id: string;
  name: string;
  url: string;
  attribution: string;
  visible: boolean;
}

// Map State Types
export interface MapState {
  center: LatLngTuple;
  zoom: number;
  activeLayer: string;
  visibleMarkers: MarkerType[];
}

// Map Event Types
export interface MapClickEvent {
  latlng: LatLngTuple;
  originalEvent: MouseEvent;
}
