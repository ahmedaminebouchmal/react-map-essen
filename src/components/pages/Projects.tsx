import { Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, Box, Chip } from '@mui/material';
import { Business, Construction, AccountTree } from '@mui/icons-material';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  status: string;
  location: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Essen Main Station Renovation",
    description: "Major renovation and modernization of Essen's central railway station, improving infrastructure and accessibility.",
    image: "/projects/station.jpg",
    category: "Infrastructure",
    status: "In Progress",
    location: "Central Essen"
  },
  {
    id: 2,
    title: "ThyssenKrupp Quarter",
    description: "Development of modern office complexes and business centers in the ThyssenKrupp district.",
    image: "/projects/thyssen.jpg",
    category: "Building",
    status: "Completed",
    location: "ThyssenKrupp District"
  },
  {
    id: 3,
    title: "Green City Initiative",
    description: "Sustainable urban development project including green buildings and eco-friendly infrastructure.",
    image: "/projects/green.jpg",
    category: "Infrastructure",
    status: "Planning",
    location: "Various Locations"
  },
  {
    id: 4,
    title: "University Medical Center",
    description: "Construction of new medical facilities and research centers at the university hospital.",
    image: "/projects/medical.jpg",
    category: "Building",
    status: "In Progress",
    location: "University District"
  }
];

const Projects = () => {
  return (
    <Container maxWidth="lg" sx={{ mt: 10, mb: 4 }}>
      <Box sx={{ mb: 6 }}>
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            color: '#1a237e',
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
          From sustainable urban development to modern architectural landmarks.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={6} key={project.id}>
            <Card 
              sx={{ 
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-8px)'
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
                  {project.category === "Infrastructure" ? 
                    <Construction sx={{ fontSize: 60, color: '#666' }} /> :
                    <AccountTree sx={{ fontSize: 60, color: '#666' }} />
                  }
                </CardMedia>
                <CardContent>
                  <Box sx={{ mb: 2, display: 'flex', gap: 1 }}>
                    <Chip 
                      label={project.category}
                      size="small"
                      sx={{ 
                        backgroundColor: project.category === "Infrastructure" ? '#1a237e' : '#8b0000',
                        color: 'white'
                      }}
                    />
                    <Chip 
                      label={project.status}
                      size="small"
                      variant="outlined"
                      sx={{ 
                        borderColor: 
                          project.status === "Completed" ? '#4caf50' : 
                          project.status === "In Progress" ? '#ff9800' : '#2196f3',
                        color: 
                          project.status === "Completed" ? '#4caf50' : 
                          project.status === "In Progress" ? '#ff9800' : '#2196f3'
                      }}
                    />
                  </Box>
                  <Typography gutterBottom variant="h6" component="h2">
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
                    {project.description}
                  </Typography>
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      color: '#666',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 0.5
                    }}
                  >
                    📍 {project.location}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
