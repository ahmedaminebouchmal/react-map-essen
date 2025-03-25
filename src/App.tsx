import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import MapContainer from './components/map/MapContainer';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column', 
      height: '100vh', 
      width: '100vw', 
      overflow: 'hidden'
    }}>
      <Box sx={{ height: '64px', zIndex: 1200 }}>
        <Navbar onMenuClick={handleMenuClick} isSidebarOpen={isSidebarOpen} />
      </Box>
      
      <Box sx={{ 
        display: 'flex',
        flex: 1,
        position: 'relative',
        overflow: 'hidden'
      }}>
        <Box sx={{ 
          width: isSidebarOpen ? '240px' : 0,
          height: '100%',
          transition: 'width 0.3s ease',
          position: 'absolute',
          left: 0,
          top: 0,
          zIndex: 1100
        }}>
          <Sidebar open={isSidebarOpen} />
        </Box>
        
        <Box component="main" sx={{ 
          flex: 1,
          overflow: 'auto',
          width: '100%',
          ml: isSidebarOpen ? '240px' : 0,
          transition: 'margin-left 0.3s ease'
        }}>
          <Routes>
            <Route path="/" element={<MapContainer />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Box>
      </Box>
      <Box 
        component={Footer} 
        sx={{ 
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          height: '48px',
          backgroundColor: '#fff',
          borderTop: '1px solid rgba(0,0,0,0.12)',
          zIndex: 1200
        }} 
      />
    </Box>
  );
}

export default App;