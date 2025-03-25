import { AppBar, Toolbar, Typography, Box, Button, IconButton } from '@mui/material';
import { MyLocation, Menu, Close } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const Navbar = ({ onMenuClick, isSidebarOpen }: NavbarProps) => {
  const location = useLocation();

  return (
    <AppBar 
      position="fixed" 
      sx={{ 
        zIndex: 1300,
        backgroundColor: '#1a1a47',
        color: 'white',
        boxShadow: 1,
        height: '64px'
      }}
    >
      <Toolbar sx={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
        padding: '0 24px'
      }}>
        {/* Logo and Menu */}
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center',
          gap: 1
        }}>
          <IconButton
            onClick={onMenuClick}
            sx={{
              color: 'white',
              transition: 'transform 0.3s ease',
              transform: isSidebarOpen ? 'rotate(180deg)' : 'none',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.1)'
              }
            }}
          >
            {isSidebarOpen ? <Close /> : <Menu />}
          </IconButton>

          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            padding: '4px 12px',
            borderRadius: '4px',
            transition: 'transform 0.3s ease',
            '&:hover': {
              transform: 'scale(1.05)'
            }
          }}>
            <MyLocation sx={{ 
              mr: 1,
              color: 'white',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': { transform: 'scale(1)' },
                '50%': { transform: 'scale(1.1)' },
                '100%': { transform: 'scale(1)' }
              }
            }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                color: 'white',
                textDecoration: 'none',
                fontWeight: 500,
                letterSpacing: '1px'
              }}
            >
              Map ESSEN
            </Typography>
          </Box>
        </Box>

        {/* Navigation Links */}
        <Box sx={{ 
          display: 'flex', 
          gap: 2,
          position: 'absolute',
          left: '50%',
          transform: 'translateX(-50%)'
        }}>
          {[
            { path: '/', label: 'Map' },
            { path: '/projects', label: 'Projects' },
            { path: '/about', label: 'About' }
          ].map(({ path, label }) => (
            <Button
              key={path}
              component={Link}
              to={path}
              sx={{
                color: 'white',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: '50%',
                  width: location.pathname === path ? '100%' : '0%',
                  height: '2px',
                  backgroundColor: 'white',
                  transition: 'all 0.3s ease',
                  transform: 'translateX(-50%)'
                },
                '&:hover::after': {
                  width: '100%'
                }
              }}
            >
              {label}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
