import { AppBar, Toolbar, Typography, Box, Button, IconButton, useTheme, useMediaQuery, Menu as MuiMenu, MenuItem } from '@mui/material';
import { MyLocation, Menu, Close, MoreVert } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

interface NavbarProps {
  onMenuClick: () => void;
  isSidebarOpen: boolean;
}

const Navbar = ({ onMenuClick, isSidebarOpen }: NavbarProps) => {
  const location = useLocation();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<null | HTMLElement>(null);

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
  };

  const navigationItems = [
    { path: '/', label: 'Map' },
    { path: '/projects', label: 'Projects' },
    { path: '/about', label: 'About' }
  ];

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
        padding: '0 24px',
        position: 'relative'
      }}>
        {/* Left Section: Sidebar Toggle and Logo */}
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

          {!isMobile && (
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
          )}
        </Box>

        {/* Center Logo for Mobile / Navigation for Desktop */}
        {isMobile ? (
          <Box sx={{ 
            display: 'flex', 
            alignItems: 'center',
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
          }}>
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
        ) : (
          <Box sx={{ 
            display: 'flex', 
            gap: 2,
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)'
          }}>
            {navigationItems.map(({ path, label }) => (
              <Button
                key={path}
                component={Link}
                to={path}
                sx={{
                  color: 'white',
                  textTransform: 'none',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: location.pathname === path ? '100%' : '0%',
                    height: '2px',
                    backgroundColor: 'white',
                    transition: 'width 0.3s ease'
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
        )}

        {/* Right Section: Mobile Menu */}
        {isMobile && (
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              color="inherit"
              onClick={handleMobileMenuOpen}
              sx={{
                ml: 'auto',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.1)'
                }
              }}
            >
              <MoreVert />
            </IconButton>
            <MuiMenu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              PaperProps={{
                sx: {
                  backgroundColor: '#1a1a47',
                  color: 'white',
                  mt: 1
                }
              }}
            >
              {navigationItems.map(({ path, label }) => (
                <MenuItem
                  key={path}
                  component={Link}
                  to={path}
                  onClick={handleMobileMenuClose}
                  selected={location.pathname === path}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      backgroundColor: 'rgba(255,255,255,0.1)'
                    },
                    '&.Mui-selected': {
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      '&:hover': {
                        backgroundColor: 'rgba(255,255,255,0.2)'
                      }
                    }
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </MuiMenu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
