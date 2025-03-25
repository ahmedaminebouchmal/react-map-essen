import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, IconButton, ListItemButton, Box } from '@mui/material';
import {
  LocationCity,
  Park,
  Museum,
  Restaurant,
  Close as CloseIcon,
  School,
  LocalHospital,
  Train,
  ShoppingCart,
  LocalCafe,
  Church,
  Sports,
  Theaters,
  Hotel
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

const menuItems = [
  { text: 'City Center', icon: <LocationCity />, description: 'Main city attractions' },
  { text: 'Parks & Gardens', icon: <Park />, description: 'Green spaces and recreation' },
  { text: 'Museums & Culture', icon: <Museum />, description: 'Art and history' },
  { text: 'Restaurants', icon: <Restaurant />, description: 'Local cuisine' },
  { text: 'Universities', icon: <School />, description: 'Educational institutions' },
  { text: 'Hospitals', icon: <LocalHospital />, description: 'Medical facilities' },
  { text: 'Transport', icon: <Train />, description: 'Public transportation' },
  { text: 'Shopping', icon: <ShoppingCart />, description: 'Malls and markets' },
  { text: 'Cafes', icon: <LocalCafe />, description: 'Coffee shops' },
  { text: 'Churches', icon: <Church />, description: 'Religious sites' },
  { text: 'Sports Venues', icon: <Sports />, description: 'Athletic facilities' },
  { text: 'Entertainment', icon: <Theaters />, description: 'Shows and events' },
  { text: 'Hotels', icon: <Hotel />, description: 'Accommodations' }
];

const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <>
      <Drawer
        variant="temporary"
        anchor="left"
        open={open}
        onClose={onClose}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { 
            width: 280, 
            boxSizing: 'border-box',
            backgroundColor: '#f8f9fa',
            borderRight: '1px solid rgba(0,0,0,0.12)',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(26,35,126,0.2)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(26,35,126,0.3)'
              }
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent'
            }
          }
        }}
      >
        <Box
          sx={{
            padding: '0 1.5rem',
            height: '64px', 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: '#1a237e',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: -4,
                right: -4,
                transform: 'translateY(-50%)',
                height: '40px',
                background: 'linear-gradient(90deg, #ffffff, #1a237e, #000000, #8b0000)',
                borderRadius: '6px',
                opacity: 0.7
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: -2,
                right: -2,
                transform: 'translateY(-50%)',
                height: '36px',
                background: '#1a237e',
                borderRadius: '4px',
                zIndex: -1
              }
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 500,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: '1.1rem',
                px: 2,
                py: 1,
                position: 'relative',
                zIndex: 1
              }}
            >
              Locations
            </Typography>
          </Box>
          <IconButton 
            onClick={onClose} 
            sx={{ 
              color: '#ffffff',
              transition: 'transform 0.3s ease',
              '&:hover': {
                transform: 'rotate(90deg)'
              }
            }}
          >
            <CloseIcon />
          </IconButton>
        </Box>
        
        <List 
          sx={{ 
            pt: 1,
            height: 'calc(100vh - 64px)', 
            overflowY: 'auto',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(26,35,126,0.2)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(26,35,126,0.3)'
              }
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent'
            }
          }}
        >
          {menuItems.map((item) => (
            <ListItem 
              key={item.text} 
              disablePadding 
              sx={{ mb: 1 }}
            >
              <ListItemButton
                sx={{
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderRadius: '0 24px 24px 0',
                  mx: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '4px',
                    height: '100%',
                    backgroundColor: '#1a237e',
                    transform: 'scaleY(0)',
                    transition: 'transform 0.3s ease',
                    borderRadius: '0 2px 2px 0'
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(26,35,126,0.08)',
                    '&::before': {
                      transform: 'scaleY(1)'
                    },
                    '& .MuiListItemIcon-root': {
                      transform: 'scale(1.2)',
                      color: '#8b0000'
                    },
                    '& .MuiListItemText-primary': {
                      transform: 'translateX(8px)',
                      color: '#1a237e'
                    },
                    '& .MuiListItemText-secondary': {
                      opacity: 1,
                      color: '#666'
                    }
                  }
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    color: '#666',
                    transition: 'all 0.3s ease',
                    minWidth: 40
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  secondary={item.description}
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      color: '#444'
                    },
                    '& .MuiListItemText-secondary': {
                      fontSize: '0.75rem',
                      opacity: 0.7,
                      transition: 'all 0.3s ease'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { 
            width: 280,
            boxSizing: 'border-box',
            backgroundColor: '#f8f9fa',
            borderRight: '1px solid rgba(0,0,0,0.12)',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(26,35,126,0.2)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(26,35,126,0.3)'
              }
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent'
            }
          }
        }}
      >
        <Box
          sx={{
            padding: '0 1.5rem',
            height: '64px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
            backgroundColor: '#1a237e',
            position: 'sticky',
            top: 0,
            zIndex: 1,
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}
        >
          <Box
            sx={{
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              height: '100%',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: -4,
                right: -4,
                transform: 'translateY(-50%)',
                height: '40px',
                background: 'linear-gradient(90deg, #ffffff, #1a237e, #000000, #8b0000)',
                borderRadius: '6px',
                opacity: 0.7
              },
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: -2,
                right: -2,
                transform: 'translateY(-50%)',
                height: '36px',
                background: '#1a237e',
                borderRadius: '4px',
                zIndex: -1
              }
            }}
          >
            <Typography 
              variant="h6" 
              sx={{ 
                color: '#ffffff', 
                fontWeight: 500,
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
                fontFamily: "'Roboto Condensed', sans-serif",
                fontSize: '1.1rem',
                px: 2,
                py: 1,
                position: 'relative',
                zIndex: 1
              }}
            >
              Locations
            </Typography>
          </Box>
        </Box>
        
        <List 
          sx={{ 
            pt: 1,
            height: 'calc(100vh - 64px)', 
            overflowY: 'auto',
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: '8px',
              backgroundColor: 'transparent'
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: 'rgba(26,35,126,0.2)',
              borderRadius: '4px',
              '&:hover': {
                backgroundColor: 'rgba(26,35,126,0.3)'
              }
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'transparent'
            }
          }}
        >
          {menuItems.map((item) => (
            <ListItem 
              key={item.text} 
              disablePadding 
              sx={{ mb: 1 }}
            >
              <ListItemButton
                sx={{
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  borderRadius: '0 24px 24px 0',
                  mx: 1,
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '4px',
                    height: '100%',
                    backgroundColor: '#1a237e',
                    transform: 'scaleY(0)',
                    transition: 'transform 0.3s ease',
                    borderRadius: '0 2px 2px 0'
                  },
                  '&:hover': {
                    backgroundColor: 'rgba(26,35,126,0.08)',
                    '&::before': {
                      transform: 'scaleY(1)'
                    },
                    '& .MuiListItemIcon-root': {
                      transform: 'scale(1.2)',
                      color: '#8b0000'
                    },
                    '& .MuiListItemText-primary': {
                      transform: 'translateX(8px)',
                      color: '#1a237e'
                    },
                    '& .MuiListItemText-secondary': {
                      opacity: 1,
                      color: '#666'
                    }
                  }
                }}
              >
                <ListItemIcon 
                  sx={{ 
                    color: '#666',
                    transition: 'all 0.3s ease',
                    minWidth: 40
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText 
                  primary={item.text}
                  secondary={item.description}
                  sx={{ 
                    '& .MuiListItemText-primary': {
                      fontWeight: 500,
                      transition: 'all 0.3s ease',
                      color: '#444'
                    },
                    '& .MuiListItemText-secondary': {
                      fontSize: '0.75rem',
                      opacity: 0.7,
                      transition: 'all 0.3s ease'
                    }
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Sidebar;
