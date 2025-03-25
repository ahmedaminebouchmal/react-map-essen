import { useMap } from 'react-leaflet';
import { Box, IconButton } from '@mui/material';
import { MyLocation, Fullscreen, Layers } from '@mui/icons-material';

const MapControls = () => {
  const map = useMap();

  const handleLocate = () => {
    if (map) {
      // Will implement geolocation using map.locate()
      map.locate({ setView: true, maxZoom: 16 });
    }
  };

  const handleFullscreen = () => {
    if (map) {
      // Will implement fullscreen toggle
      const container = map.getContainer();
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        container.requestFullscreen();
      }
    }
  };

  const handleLayers = () => {
    if (map) {
      // Will implement layer control
      console.log('Layer control clicked');
    }
  };

  return (
    <Box sx={{ 
      position: 'absolute', 
      top: 10, 
      right: 10, 
      zIndex: 1000,
      backgroundColor: 'white',
      borderRadius: 1,
      boxShadow: 1,
      '& > button': { 
        display: 'block',
        margin: '8px'
      }
    }}>
      <IconButton onClick={handleLocate} size="small" title="My Location">
        <MyLocation />
      </IconButton>
      <IconButton onClick={handleFullscreen} size="small" title="Fullscreen">
        <Fullscreen />
      </IconButton>
      <IconButton onClick={handleLayers} size="small" title="Layers">
        <Layers />
      </IconButton>
    </Box>
  );
};

export default MapControls;
