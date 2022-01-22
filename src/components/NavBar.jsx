import React from 'react'
import { Link, withRouter } from "react-router-dom";
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import logo from '../cloud.png'




function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" class="testClass">
        <Toolbar>
            <nav>
              <Link to="/">
                <img src={logo} class="logo" />
              </Link>
            </nav>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <h2><em>Purdue Weather App</em></h2>
                </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
          <nav>
              <Link class="remove_link" to="/">Home</Link>
            </nav>
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
          <nav>
              <Link class="remove_link" to="/">What We Do</Link>
            </nav>
          </Typography>
          <Typography variant="h6" class="navbar_buttons" component="div" sx={{ flexGrow: 1 }}>
            <nav>
              <Link class="remove_link" to="/">Contact Us</Link>
            </nav>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
