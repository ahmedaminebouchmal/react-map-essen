import { Marker, Popup } from 'react-leaflet';
import { MeetingPlace } from '../../../services/geoJsonService';
import { Card, CardContent, Typography, Link, Box, Chip, Divider, Grid } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LanguageIcon from '@mui/icons-material/Language';
import InfoIcon from '@mui/icons-material/Info';
import { meetingPlaceIcon } from '../utils/leafletIcons';

interface MeetingPlaceMarkerProps {
  place: MeetingPlace;
}

export const MeetingPlaceMarker: React.FC<MeetingPlaceMarkerProps> = ({ place }) => {
  return (
    <Marker 
      position={place.coordinates} 
      icon={meetingPlaceIcon}
    >
      <Popup maxWidth={500}>
        <Card sx={{ 
          width: '450px',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
          '& .MuiCardContent-root': {
            padding: 2,
          }
        }}>
          <Box sx={{ 
            bgcolor: 'primary.main', 
            color: 'white',
            p: 1.5,
            borderBottom: '4px solid',
            borderColor: 'primary.dark'
          }}>
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              {place.name}
            </Typography>
          </Box>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'flex-start', 
                  p: 1,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  height: '100%'
                }}>
                  <LocationOnIcon sx={{ mr: 1, mt: 0.5, color: 'primary.main' }} />
                  <Typography variant="body2">
                    {place.address.street},<br />
                    {place.address.postalCode} {place.address.district}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {place.contact.phone && (
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateX(8px)'
                      }
                    }}>
                      <PhoneIcon sx={{ mr: 1, fontSize: '1rem', color: 'success.main' }} />
                      <Link 
                        href={`tel:${place.contact.phone}`} 
                        underline="none"
                        sx={{
                          color: 'success.main',
                          fontSize: '0.875rem',
                          '&:hover': {
                            color: 'success.dark'
                          }
                        }}
                      >
                        {place.contact.phone}
                      </Link>
                    </Box>
                  )}

                  {place.contact.email && (
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateX(8px)'
                      }
                    }}>
                      <EmailIcon sx={{ mr: 1, fontSize: '1rem', color: 'info.main' }} />
                      <Link 
                        href={`mailto:${place.contact.email}`} 
                        underline="none"
                        sx={{
                          color: 'info.main',
                          fontSize: '0.875rem',
                          '&:hover': {
                            color: 'info.dark'
                          }
                        }}
                      >
                        {place.contact.email}
                      </Link>
                    </Box>
                  )}

                  {place.contact.website && (
                    <Box sx={{ 
                      display: 'flex', 
                      alignItems: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateX(8px)'
                      }
                    }}>
                      <LanguageIcon sx={{ mr: 1, fontSize: '1rem', color: 'primary.main' }} />
                      <Link 
                        href={place.contact.website} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        underline="none"
                        sx={{
                          color: 'primary.main',
                          fontSize: '0.875rem',
                          '&:hover': {
                            color: 'primary.dark'
                          }
                        }}
                      >
                        Visit Website
                      </Link>
                    </Box>
                  )}
                </Box>
              </Grid>
            </Grid>

            <Divider sx={{ my: 2 }} />

            <Box>
              <Chip
                icon={<InfoIcon sx={{ fontSize: '1rem' }} />}
                label="Services"
                color="primary"
                size="small"
                sx={{ mb: 1, fontWeight: 'medium' }}
              />
              <Typography 
                variant="body2" 
                color="text.secondary"
                sx={{ 
                  p: 1.5,
                  bgcolor: 'grey.50',
                  borderRadius: 1,
                  borderLeft: '3px solid',
                  borderColor: 'primary.main',
                  maxHeight: '100px',
                  overflowY: 'auto'
                }}
              >
                {place.services}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Popup>
    </Marker>
  );
};
