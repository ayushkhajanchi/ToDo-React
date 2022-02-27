import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function index() {
  return (
    
    <div>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >          
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            ToDo List
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
      <center><h2>ToDo List</h2></center>
    </div>
  );
}

export default index;
