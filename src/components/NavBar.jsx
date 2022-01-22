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
<<<<<<< HEAD
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
=======
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <nav>
              <Link to="/">Home</Link>
            </nav>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <nav>
              <Link to="/">What We Do</Link>
            </nav>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <nav>
              <Link to="/">Contact Us</Link>
            </nav>
>>>>>>> a2d67585672e3f1ae17e9d8206950587e770403d
          </Typography>

          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
