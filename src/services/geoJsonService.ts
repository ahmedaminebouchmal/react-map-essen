import axios from 'axios';

export interface MeetingPlace {
  id: number;
  name: string;
  address: {
    street: string;
    postalCode: number;
    district: string;
  };
  coordinates: [number, number];
  services: string;
  contact: {
    phone: string;
    email: string;
    website: string;
  };
}

interface GeoJSONFeature {
  type: "Feature";
  id: number;
  geometry: {
    type: "Point";
    coordinates: [number, number];
  };
  properties: {
    EINRICHTUN: string;
    STRASSE: string;
    PLZ: number;
    STADTTEIL: string;
    ANGEBOT: string;
    TELEFON: string;
    E_MAIL: string;
    INTERNET: string;
  };
}

interface GeoJSONResponse {
  type: "FeatureCollection";
  features: GeoJSONFeature[];
}

const GEOJSON_URL = 'https://opendata.essen.de/sites/default/files/Orte_der_Begegnung.geojson';
const CORS_PROXY = 'https://api.allorigins.win/raw?url=';

function formatWebsiteUrl(url: string): string {
  if (!url) return '';
  url = url.trim();
  if (!url) return '';
  
  // If it's already a valid URL, return it
  if (url.startsWith('http://') || url.startsWith('https://')) {
    return url;
  }
  
  // Add https:// prefix
  return `https://${url}`;
}

export const fetchMeetingPlaces = async (): Promise<MeetingPlace[]> => {
  try {
    const response = await axios.get<GeoJSONResponse>(`${CORS_PROXY}${encodeURIComponent(GEOJSON_URL)}`, {
      headers: {
        'Accept': 'application/json'
      }
    });
    
    if (!response.data || !response.data.features) {
      return [];
    }

    return response.data.features.map(feature => ({
      id: feature.id,
      name: feature.properties.EINRICHTUN,
      address: {
        street: feature.properties.STRASSE,
        postalCode: feature.properties.PLZ,
        district: feature.properties.STADTTEIL,
      },
      coordinates: [
        feature.geometry.coordinates[1], 
        feature.geometry.coordinates[0]
      ],
      services: feature.properties.ANGEBOT,
      contact: {
        phone: feature.properties.TELEFON?.trim() || '',
        email: feature.properties.E_MAIL?.trim() || '',
        website: formatWebsiteUrl(feature.properties.INTERNET || ''),
      },
    }));
  } catch (error) {
    return [];
  }
};
