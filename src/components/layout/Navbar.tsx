import { AppBar, Toolbar, Typography, Button, IconButton, Box } from '@mui/material';
import { Menu as MenuIcon, Map as MapIcon } from '@mui/icons-material';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <AppBar 
      position="static" 
      sx={{ 
        backgroundColor: '#1a237e',
        boxShadow: '0 2px 4px rgba(0,0,0,0.2)'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Left section */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <MapIcon sx={{ mr: 1, color: '#ffffff' }} />
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600,
              color: '#ffffff',
              letterSpacing: '0.5px'
            }}
          >
            Map Essen
          </Typography>
        </Box>

        {/* Center section */}
        <Box 
          sx={{ 
            display: 'flex', 
            gap: '2rem',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}
        >
          <Button 
            color="inherit" 
            sx={{ 
              fontWeight: 500,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: 0,
                height: '2px',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)'
              },
              '&:hover': {
                backgroundColor: 'transparent',
                '&::after': {
                  width: '100%'
                }
              }
            }}
          >
            Home
          </Button>
          <Button 
            color="inherit"
            sx={{ 
              fontWeight: 500,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: 0,
                height: '2px',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)'
              },
              '&:hover': {
                backgroundColor: 'transparent',
                '&::after': {
                  width: '100%'
                }
              }
            }}
          >
            About
          </Button>
          <Button 
            color="inherit"
            sx={{ 
              fontWeight: 500,
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                width: 0,
                height: '2px',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)'
              },
              '&:hover': {
                backgroundColor: 'transparent',
                '&::after': {
                  width: '100%'
                }
              }
            }}
          >
            Contact
          </Button>
        </Box>

        {/* Right section - empty to maintain centering */}
        <Box sx={{ width: { xs: '40px', sm: '135px' } }} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
