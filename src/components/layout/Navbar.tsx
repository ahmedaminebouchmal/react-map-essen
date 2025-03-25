import { AppBar, Toolbar, IconButton, Typography, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

interface NavbarProps {
  onMenuClick: () => void;
}

const Navbar = ({ onMenuClick }: NavbarProps) => {
  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        backgroundColor: '#1a237e',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={onMenuClick}
            sx={{ 
              mr: 2,
              display: { sm: 'none' },
              '&:hover': {
                transform: 'scale(1.1)',
                transition: 'transform 0.2s'
              }
            }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              color: 'white',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '1px'
            }}
          >
            Map Essen
          </Typography>
        </Box>

        <Box 
          sx={{ 
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: 2
          }}
        >
          <Button
            component={Link}
            to="/"
            color="inherit"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)'
              },
              '&:hover::after': {
                width: '100%'
              }
            }}
          >
            Home
          </Button>
          
          <Button
            component={Link}
            to="/projects"
            color="inherit"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)'
              },
              '&:hover::after': {
                width: '100%'
              }
            }}
          >
            Projects
          </Button>

          <Button
            component={Link}
            to="/about"
            color="inherit"
            sx={{
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: 0,
                left: '50%',
                backgroundColor: '#ffffff',
                transition: 'all 0.3s ease',
                transform: 'translateX(-50%)'
              },
              '&:hover::after': {
                width: '100%'
              }
            }}
          >
            About
          </Button>
        </Box>

        {/* Empty box to balance the layout */}
        <Box sx={{ visibility: 'hidden', display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6">Map Essen</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
