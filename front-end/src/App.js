// import librairy
import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { BrowserRouter, Switch, Route } from "react-router-dom";

//import components
import AccessInfo from './components/accessInfo';
import MediaControlCard from './components/player';
import SearchNav from './components/searchNav';
import Accueil from './components/pages/Accueil';
import Albums from './components/pages/Albums';
import Artistes from './components/pages/Artistes';
import Genres from './components/pages/Genres';
import Search from './components/pages/Search';

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: '100%',
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const mdTheme = createTheme();

export default function App() {

  return (
    <ThemeProvider theme={mdTheme}>
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar position="absolute" color='success'>
                <Toolbar
                    sx={{
                    pr: '24px', // keep right padding when drawer closed
                    }}
                >
                    <AccessInfo/>
                    <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    sx={{ flexGrow: 1 }}
                    style={{marginLeft:'15%'}}
                    >
                    Spotify
                    </Typography>
                    <SearchNav/>
                </Toolbar>
            </AppBar>
            <Box
            component="main"
            sx={{
                backgroundColor: (theme) =>
                theme.palette.mode === 'light'
                    ? theme.palette.grey[100]
                    : theme.palette.grey[900],
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
            }}
            >
            <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} style={{marginTop:'4%'}}>
                <BrowserRouter>
                    <Switch>
                        <Route 
                        path="/" 
                        component={Accueil} 
                        exact
                        />
                        <Route
                        path="/Genres"
                        component={Genres}
                        exact
                        />
                        <Route 
                        path="/Albums" 
                        component={Albums} 
                        exact
                        />
                        <Route
                        path="/Artistes"
                        component={Artistes}
                        exact
                        />
                        <Route
                        path="/Search"
                        component={Search}
                        exact
                        />
                    </Switch>
                </BrowserRouter>
                
            </Container>
            <MediaControlCard/> 
            </Box> 
            
        </Box>
    </ThemeProvider>
  );
}

