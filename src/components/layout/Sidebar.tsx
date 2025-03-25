import { Drawer, List, ListItemButton, ListItemIcon, ListItemText, Typography, Box } from '@mui/material';
import {
  LocationCity,
  Park,
  Museum,
  Restaurant,
  School,
  LocalHospital,
  Train,
  ShoppingCart,
  LocalCafe,
  Church,
  Sports,
  Theaters,
  Hotel,
  LocalParking,
  Landscape,
  BeachAccess,
  LocalLibrary,
  Nightlife,
  LocalMall,
  LocalAtm,
  LocalPolice,
  LocalPostOffice,
  Pool
} from '@mui/icons-material';

interface SidebarProps {
  open: boolean;
}

const menuItems = [
  { text: 'City Center', icon: <LocationCity /> },
  { text: 'Parks & Gardens', icon: <Park /> },
  { text: 'Museums & Culture', icon: <Museum /> },
  { text: 'Restaurants', icon: <Restaurant /> },
  { text: 'Universities', icon: <School /> },
  { text: 'Hospitals', icon: <LocalHospital /> },
  { text: 'Transport', icon: <Train /> },
  { text: 'Shopping Centers', icon: <ShoppingCart /> },
  { text: 'Cafes & Bistros', icon: <LocalCafe /> },
  { text: 'Churches', icon: <Church /> },
  { text: 'Sports Venues', icon: <Sports /> },
  { text: 'Entertainment', icon: <Theaters /> },
  { text: 'Hotels', icon: <Hotel /> },
  { text: 'Parking Areas', icon: <LocalParking /> },
  { text: 'Nature Spots', icon: <Landscape /> },
  { text: 'Swimming Areas', icon: <Pool /> },
  { text: 'Lakes & Rivers', icon: <BeachAccess /> },
  { text: 'Libraries', icon: <LocalLibrary /> },
  { text: 'Nightlife', icon: <Nightlife /> },
  { text: 'Shopping Streets', icon: <LocalMall /> },
  { text: 'Banks & ATMs', icon: <LocalAtm /> },
  { text: 'Police Stations', icon: <LocalPolice /> },
  { text: 'Post Offices', icon: <LocalPostOffice /> }
];

const Sidebar = ({ open }: SidebarProps) => {
  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={open}
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          position: 'absolute',
          top: 0,
          height: '100%',
          backgroundColor: '#f5f5f5',
          boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
          zIndex: 1100,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '6px'
          },
          '&::-webkit-scrollbar-track': {
            backgroundColor: 'transparent'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '#1a1a47',
            borderRadius: '3px',
            '&:hover': {
              backgroundColor: '#2a2a57'
            }
          }
        }
      }}
    >
      <Box sx={{ 
        padding: '12px 16px',
        borderBottom: '1px solid rgba(26,26,71,0.1)',
        backgroundColor: '#1a1a47'
      }}>
        <Typography
          variant="h6"
          sx={{
            color: '#fff',
            fontWeight: 500,
            fontSize: '1.1rem',
            letterSpacing: '0.5px'
          }}
        >
          Locations
        </Typography>
      </Box>

      <List sx={{ pt: 1, pb: 2 }}>
        {menuItems.map((item) => (
          <ListItemButton
            key={item.text}
            sx={{
              margin: '4px 8px',
              borderRadius: '4px',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(26,26,71,0.12)',
                transform: 'translateX(4px)',
                '& .MuiListItemIcon-root': {
                  color: '#1a1a47',
                  transform: 'scale(1.1)',
                  filter: 'brightness(1.2)'
                },
                '& .MuiListItemText-primary': {
                  color: '#1a1a47',
                  fontWeight: 600
                }
              },
              '& .MuiListItemIcon-root': {
                color: '#555',
                transition: 'all 0.2s ease',
                minWidth: '36px'
              },
              '& .MuiListItemText-primary': {
                color: '#333',
                fontWeight: 400,
                transition: 'all 0.2s ease',
                fontSize: '0.95rem'
              }
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItemButton>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;
