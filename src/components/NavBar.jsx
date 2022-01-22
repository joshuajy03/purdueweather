import React from 'react'
import { Link, withRouter } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';



function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="testClass">
        <Toolbar>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
            What we do
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
            Contact Us
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
            Our Services
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
