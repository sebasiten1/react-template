import * as React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import {BrowserRouter as Router, Link } from "react-router-dom";

export default function AccessInfo() {

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup variant="text" aria-label="text button group">
          <Router forceRefresh={true}>
            <Link to='/'><Button style={{color:'#fff'}} >Accueil</Button></Link>
            <Link to='/Genres'><Button style={{color:'#fff'}} >Genres</Button></Link>
            <Link to='/Albums'><Button style={{color:'#fff'}} >Albums</Button></Link>
            <Link to='/Artistes'><Button style={{color:'#fff'}} >Artistes</Button></Link>
        </Router>
      </ButtonGroup>
    </Box>
  );
}
