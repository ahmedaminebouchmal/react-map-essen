import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { MapOutlined, CodeOutlined, SchoolOutlined } from '@mui/icons-material';

const About = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      pt: '64px' 
    }}>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ mb: 6, textAlign: 'center' }}>
          <Typography 
            variant="h3" 
            component="h1" 
            gutterBottom
            sx={{ 
              fontWeight: 700,
              color: '#1a237e',
              mb: 2
            }}
          >
            About Map Essen
          </Typography>
          <Typography 
            variant="h6" 
            color="text.secondary"
            sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}
          >
            An interactive mapping solution for exploring infrastructure and development projects in Essen
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <MapOutlined sx={{ fontSize: 40, color: '#1a237e', mr: 2 }} />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Interactive Mapping
                </Typography>
              </Box>
              <Typography color="text.secondary">
                Explore Essen's urban landscape through our interactive map interface. 
                Discover infrastructure projects, landmarks, and development zones with ease.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <CodeOutlined sx={{ fontSize: 40, color: '#1a237e', mr: 2 }} />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Modern Technology
                </Typography>
              </Box>
              <Typography color="text.secondary">
                Built with React and modern web technologies to provide a seamless, 
                responsive experience across all devices.
              </Typography>
            </Paper>
          </Grid>

          <Grid item xs={12} md={4}>
            <Paper 
              elevation={2} 
              sx={{ 
                p: 3, 
                height: '100%',
                transition: 'transform 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)'
                }
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <SchoolOutlined sx={{ fontSize: 40, color: '#1a237e', mr: 2 }} />
                <Typography variant="h5" component="h2" sx={{ fontWeight: 600 }}>
                  Educational Purpose
                </Typography>
              </Box>
              <Typography color="text.secondary">
                Created as part of an educational project to showcase urban development 
                and infrastructure projects in Essen.
              </Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <Typography variant="h5" component="h2" gutterBottom sx={{ color: '#1a237e', fontWeight: 600 }}>
            About the Developer
          </Typography>
          <Typography color="text.secondary" sx={{ maxWidth: 700, mx: 'auto' }}>
            Developed by Ahmed Amine Bouchmal, a passionate developer focused on creating 
            innovative solutions for urban exploration and infrastructure visualization. 
            This project combines modern web development with practical urban planning applications.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
