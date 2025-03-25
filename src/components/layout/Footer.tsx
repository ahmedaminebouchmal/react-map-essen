import { useState } from 'react';
import { 
  Paper, 
  Typography, 
  Container, 
  Box, 
  IconButton, 
  Collapse,
  Grid,
  Link
} from '@mui/material';
import {
  KeyboardArrowUp as ArrowUpIcon,
  KeyboardArrowDown as ArrowDownIcon,
  Email as EmailIcon,
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';

const Footer = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleFooter = () => {
    setExpanded(!expanded);
  };

  return (
    <Paper 
      component="footer" 
      square 
      elevation={3}
      sx={{
        backgroundColor: '#1a237e',
        color: '#ffffff',
        position: 'relative',
        mt: 'auto'
      }}
    >
      <Collapse in={expanded}>
        <Container maxWidth="lg" sx={{ py: 1.5 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                About Developer
              </Typography>
              <Typography variant="body2" sx={{ lineHeight: 1.4, fontSize: '0.875rem' }}>
                Created with passion by Ahmed Amine Bouchmal.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <EmailIcon sx={{ mr: 1, fontSize: 16 }} />
                <Link 
                  href="mailto:bouchmalaabesp@gmail.com"
                  color="inherit"
                  sx={{ 
                    textDecoration: 'none',
                    fontSize: '0.875rem',
                    '&:hover': { color: '#90caf9' }
                  }}
                >
                  bouchmalaabesp@gmail.com
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                Connect
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                <IconButton 
                  size="small"
                  color="inherit"
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#90caf9'
                    }
                  }}
                >
                  <GitHubIcon sx={{ fontSize: 18 }} />
                </IconButton>
                <IconButton 
                  size="small"
                  color="inherit"
                  sx={{ 
                    '&:hover': { 
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#90caf9'
                    }
                  }}
                >
                  <LinkedInIcon sx={{ fontSize: 18 }} />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Collapse>

      <Box 
        sx={{ 
          height: '24px',
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderTop: expanded ? '1px solid rgba(255,255,255,0.1)' : 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 1
        }}
      >
        <IconButton
          size="small"
          onClick={toggleFooter}
          sx={{
            color: 'white',
            padding: 0,
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.1)'
            },
            '& .MuiSvgIcon-root': {
              fontSize: '0.9rem'
            }
          }}
        >
          {expanded ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </IconButton>
        
        <Typography 
          variant="caption"
          sx={{
            fontSize: '0.75rem',
            opacity: 0.9
          }}
        >
          &copy; {new Date().getFullYear()} Map Essen
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
