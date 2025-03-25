import { useState } from 'react';
import { 
  Paper, 
  Typography, 
  Container, 
  Box, 
  IconButton, 
  Collapse,
  Grid,
  Link,
  Tooltip
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
      {/* Visible handle for expanding/collapsing */}
      <Tooltip title={expanded ? "Show less" : "Show more"}>
        <Box
          onClick={toggleFooter}
          sx={{
            position: 'absolute',
            top: -32,
            left: '50%',
            transform: 'translateX(-50%)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#1a237e',
            borderRadius: '8px 8px 0 0',
            padding: '4px 16px',
            zIndex: 1,
            '&:hover': {
              backgroundColor: '#283593',
            },
          }}
        >
          <Typography variant="caption" sx={{ mb: 0.5 }}>
            {expanded ? 'Hide Details' : 'Show Details'}
          </Typography>
          {expanded ? <ArrowDownIcon /> : <ArrowUpIcon />}
        </Box>
      </Tooltip>

      {/* Main content */}
      <Collapse in={expanded}>
        <Container maxWidth="lg" sx={{ py: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40%',
                    height: '2px',
                    backgroundColor: '#fff'
                  }
                }}
              >
                About Developer
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6 }}>
                Created with passion by Ahmed Amine Bouchmal. Specializing in interactive mapping solutions and modern web applications.
              </Typography>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40%',
                    height: '2px',
                    backgroundColor: '#fff'
                  }
                }}
              >
                Contact
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                <Link 
                  href="mailto:bouchmalaabesp@gmail.com"
                  color="inherit"
                  sx={{ 
                    textDecoration: 'none',
                    '&:hover': { 
                      textDecoration: 'underline',
                      color: '#90caf9'
                    },
                    transition: 'color 0.3s ease'
                  }}
                >
                  bouchmalaabesp@gmail.com
                </Link>
              </Box>
            </Grid>

            <Grid item xs={12} md={4}>
              <Typography 
                variant="h6" 
                sx={{ 
                  fontWeight: 600,
                  mb: 2,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -8,
                    left: 0,
                    width: '40%',
                    height: '2px',
                    backgroundColor: '#fff'
                  }
                }}
              >
                Connect
              </Typography>
              <Box sx={{ display: 'flex', gap: 2 }}>
                <IconButton 
                  color="inherit"
                  sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-3px)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#90caf9'
                    }
                  }}
                >
                  <GitHubIcon />
                </IconButton>
                <IconButton 
                  color="inherit"
                  sx={{ 
                    transition: 'all 0.3s ease',
                    '&:hover': { 
                      transform: 'translateY(-3px)',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      color: '#90caf9'
                    }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Collapse>

      {/* Always visible footer bar */}
      <Box 
        sx={{ 
          py: 2.5, 
          backgroundColor: 'rgba(0,0,0,0.2)',
          borderTop: expanded ? '1px solid rgba(255,255,255,0.1)' : 'none',
          position: 'relative', 
          zIndex: 0 
        }}
      >
        <Typography 
          variant="body2" 
          align="center"
          sx={{
            fontWeight: 500,
            letterSpacing: '0.5px',
            pt: 1 
          }}
        >
          &copy; {new Date().getFullYear()} Map Essen by Ahmed Amine Bouchmal. All rights reserved.
        </Typography>
      </Box>
    </Paper>
  );
};

export default Footer;
