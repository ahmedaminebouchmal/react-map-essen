import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  CardActionArea, 
  Box, 
  Chip,
  LinearProgress,
  Tooltip,
  IconButton,
  Stack,
  Divider
} from '@mui/material';
import { 
  Business, 
  Construction, 
  AccountTree, 
  Apartment, 
  Park, 
  School, 
  LocalHospital,
  Train,
  Info,
  EuroSymbol,
  Schedule,
  LocationOn
} from '@mui/icons-material';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  location: string;
  progress: number;
  budget: string;
  timeline: string;
  contractor: string;
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'Completed':
      return '#4caf50';
    case 'In Progress':
      return '#ff9800';
    case 'Planning':
      return '#2196f3';
    case 'On Hold':
      return '#f44336';
    case 'Tendering':
      return '#9c27b0';
    default:
      return '#757575';
  }
};

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Infrastructure':
      return <Construction sx={{ fontSize: 60, color: '#666' }} />;
    case 'Commercial':
      return <Business sx={{ fontSize: 60, color: '#666' }} />;
    case 'Residential':
      return <Apartment sx={{ fontSize: 60, color: '#666' }} />;
    case 'Healthcare':
      return <LocalHospital sx={{ fontSize: 60, color: '#666' }} />;
    case 'Education':
      return <School sx={{ fontSize: 60, color: '#666' }} />;
    case 'Transportation':
      return <Train sx={{ fontSize: 60, color: '#666' }} />;
    case 'Landscape':
      return <Park sx={{ fontSize: 60, color: '#666' }} />;
    default:
      return <AccountTree sx={{ fontSize: 60, color: '#666' }} />;
  }
};

const projects: Project[] = [
  {
    id: 1,
    title: "Essen Main Station Renovation",
    description: "Major renovation and modernization of Essen's central railway station, improving infrastructure and accessibility with new platforms and digital systems.",
    image: "/projects/station.jpg",
    category: "Transportation",
    status: "In Progress",
    location: "Central Essen",
    progress: 65,
    budget: "€120M",
    timeline: "2023-2025",
    contractor: "HOCHTIEF Infrastructure"
  },
  {
    id: 2,
    title: "ThyssenKrupp Quarter",
    description: "Development of modern office complexes and business centers in the ThyssenKrupp district with sustainable design principles.",
    image: "/projects/thyssen.jpg",
    category: "Commercial",
    status: "Completed",
    location: "ThyssenKrupp District",
    progress: 100,
    budget: "€200M",
    timeline: "2020-2023",
    contractor: "HOCHTIEF Building"
  },
  {
    id: 3,
    title: "Green City Initiative",
    description: "Sustainable urban development project including green buildings, parks, and eco-friendly infrastructure across multiple locations.",
    image: "/projects/green.jpg",
    category: "Landscape",
    status: "Planning",
    location: "Various Locations",
    progress: 15,
    budget: "€80M",
    timeline: "2024-2026",
    contractor: "HOCHTIEF Green Solutions"
  },
  {
    id: 4,
    title: "University Medical Center",
    description: "Construction of new medical facilities and research centers at the university hospital with state-of-the-art equipment.",
    image: "/projects/medical.jpg",
    category: "Healthcare",
    status: "In Progress",
    location: "University District",
    progress: 45,
    budget: "€150M",
    timeline: "2023-2025",
    contractor: "HOCHTIEF Healthcare"
  },
  {
    id: 5,
    title: "Smart Residential Complex",
    description: "Modern residential development with smart home technology and sustainable energy solutions for 200 units.",
    image: "/projects/residential.jpg",
    category: "Residential",
    status: "Tendering",
    location: "North Essen",
    progress: 0,
    budget: "€90M",
    timeline: "2024-2026",
    contractor: "HOCHTIEF Residential"
  },
  {
    id: 6,
    title: "Technical University Extension",
    description: "New campus buildings for engineering and computer science departments with modern laboratories and lecture halls.",
    image: "/projects/university.jpg",
    category: "Education",
    status: "Planning",
    location: "University Campus",
    progress: 10,
    budget: "€70M",
    timeline: "2024-2025",
    contractor: "HOCHTIEF Education"
  },
  {
    id: 7,
    title: "Urban Railway Extension",
    description: "Extension of the urban railway network with new stations and modernized signaling systems.",
    image: "/projects/railway.jpg",
    category: "Transportation",
    status: "On Hold",
    location: "South Essen",
    progress: 30,
    budget: "€180M",
    timeline: "2023-2026",
    contractor: "HOCHTIEF Infrastructure"
  },
  {
    id: 8,
    title: "Innovation Hub",
    description: "Technology and innovation center with flexible office spaces and startup incubation facilities.",
    image: "/projects/innovation.jpg",
    category: "Commercial",
    status: "In Progress",
    location: "Digital District",
    progress: 75,
    budget: "€95M",
    timeline: "2023-2024",
    contractor: "HOCHTIEF Digital"
  },
  {
    id: 9,
    title: "Eco Park Development",
    description: "Creation of an ecological park with native plants, water features, and recreational facilities.",
    image: "/projects/park.jpg",
    category: "Landscape",
    status: "In Progress",
    location: "East Essen",
    progress: 55,
    budget: "€40M",
    timeline: "2023-2024",
    contractor: "HOCHTIEF Green Solutions"
  },
  {
    id: 10,
    title: "Senior Living Complex",
    description: "Modern retirement community with healthcare facilities and recreational areas for senior citizens.",
    image: "/projects/senior.jpg",
    category: "Healthcare",
    status: "Planning",
    location: "West Essen",
    progress: 5,
    budget: "€110M",
    timeline: "2024-2026",
    contractor: "HOCHTIEF Healthcare"
  },
  {
    id: 11,
    title: "Shopping District Renovation",
    description: "Modernization of the central shopping district with new retail spaces and improved pedestrian areas.",
    image: "/projects/shopping.jpg",
    category: "Commercial",
    status: "Tendering",
    location: "City Center",
    progress: 0,
    budget: "€85M",
    timeline: "2024-2025",
    contractor: "HOCHTIEF Retail"
  },
  {
    id: 12,
    title: "Sports Complex",
    description: "Multi-purpose sports facility with indoor and outdoor venues, including swimming pools and training centers.",
    image: "/projects/sports.jpg",
    category: "Infrastructure",
    status: "In Progress",
    location: "Sports District",
    progress: 35,
    budget: "€130M",
    timeline: "2023-2025",
    contractor: "HOCHTIEF Sports"
  }
];

const Projects = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      pt: '64px'
    }}>
      <Box sx={{
        flex: 1,
        overflow: 'auto',
        '&::-webkit-scrollbar': {
          width: '6px',
          background: 'transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#1a1a47',
          borderRadius: '3px',
          '&:hover': {
            background: '#2a2a57',
            width: '8px'
          }
        },
        '&::-webkit-scrollbar-track': {
          background: 'transparent'
        },
        '&:hover::-webkit-scrollbar-thumb': {
          background: '#1a1a47'
        }
      }}>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box sx={{ mb: 6 }}>
            <Typography 
              variant="h4" 
              component="h1" 
              gutterBottom
              sx={{ 
                fontWeight: 600,
                color: '#1a1a47',
                display: 'flex',
                alignItems: 'center',
                gap: 2
              }}
            >
              <Business sx={{ fontSize: 40 }} />
              HOCHTIEF Projects in Essen
            </Typography>
            <Typography 
              variant="subtitle1" 
              color="text.secondary"
              sx={{ maxWidth: 800 }}
            >
              Discover our major infrastructure and building projects that are shaping the future of Essen.
              From sustainable urban development to modern architectural landmarks, explore our diverse portfolio
              of ongoing and completed projects.
            </Typography>
          </Box>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            {projects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card 
                  sx={{ 
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)'
                    }
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="div"
                      sx={{
                        height: 200,
                        backgroundColor: '#e0e0e0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {getCategoryIcon(project.category)}
                    </CardMedia>
                    <CardContent>
                      <Box sx={{ mb: 2, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        <Chip 
                          label={project.category}
                          size="small"
                          sx={{ 
                            backgroundColor: '#1a1a47',
                            color: 'white'
                          }}
                        />
                        <Chip 
                          label={project.status}
                          size="small"
                          sx={{ 
                            backgroundColor: getStatusColor(project.status),
                            color: 'white'
                          }}
                        />
                      </Box>
                      <Typography gutterBottom variant="h6" component="h2">
                        {project.title}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" paragraph>
                        {project.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardContent>
                    <Divider sx={{ mb: 2 }} />
                    <Stack spacing={1}>
                      <Box sx={{ width: '100%' }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                          <Typography variant="body2" color="text.secondary">
                            Progress
                          </Typography>
                          <Typography variant="body2" color="text.secondary">
                            {project.progress}%
                          </Typography>
                        </Box>
                        <LinearProgress 
                          variant="determinate" 
                          value={project.progress} 
                          sx={{
                            height: 6,
                            borderRadius: 3,
                            backgroundColor: 'rgba(0,0,0,0.1)',
                            '& .MuiLinearProgress-bar': {
                              backgroundColor: getStatusColor(project.status)
                            }
                          }}
                        />
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <EuroSymbol sx={{ fontSize: 16, color: '#666' }} />
                        <Typography variant="body2" color="text.secondary">
                          {project.budget}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <Schedule sx={{ fontSize: 16, color: '#666' }} />
                        <Typography variant="body2" color="text.secondary">
                          {project.timeline}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                        <LocationOn sx={{ fontSize: 16, color: '#666' }} />
                        <Typography variant="body2" color="text.secondary">
                          {project.location}
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Tooltip title={project.contractor} placement="top">
                          <IconButton size="small">
                            <Info sx={{ fontSize: 16 }} />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Stack>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Projects;
