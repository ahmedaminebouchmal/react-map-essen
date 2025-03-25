import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Footer from './components/layout/Footer';
import Map from './components/Map';
import Projects from './components/pages/Projects';
import About from './components/pages/About';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar onMenuClick={handleSidebarToggle} />
      <Sidebar open={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      
      <Box component="main" sx={{ 
        flex: 1, 
        marginTop: '64px',
        position: 'relative',
        overflow: 'auto'  
      }}>
        <Routes>
          <Route path="/" element={
            <Box sx={{ height: '100%', width: '100%', position: 'absolute' }}>
              <Map />
            </Box>
          } />
          <Route path="/projects" element={
            <Box sx={{ minHeight: '100%', pb: 4 }}>
              <Projects />
            </Box>
          } />
          <Route path="/about" element={
            <Box sx={{ minHeight: '100%', pb: 4 }}>
              <About />
            </Box>
          } />
        </Routes>
      </Box>

      <Footer />
    </Box>
  );
}

export default App;