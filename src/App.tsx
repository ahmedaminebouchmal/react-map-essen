import { useState } from 'react'
import { Box } from '@mui/material'
import Map from './components/Map'
import Navbar from './components/layout/Navbar'
import Sidebar from './components/layout/Sidebar'
import Footer from './components/layout/Footer'

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  return (
    <Box 
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh',
        overflow: 'hidden'
      }}
    >
      <Navbar onMenuClick={handleMenuClick} />
      <Box 
        sx={{ 
          display: 'flex', 
          flex: 1,
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <Sidebar open={sidebarOpen} onClose={handleSidebarClose} />
        <Box 
          sx={{ 
            flex: 1, 
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Box sx={{ flex: 1, overflow: 'hidden' }}>
            <Map />
          </Box>
          <Footer />
        </Box>
      </Box>
    </Box>
  )
}

export default App